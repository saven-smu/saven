import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "landing",
        component: () => import("./views/LandingPage.vue"),
    },
    {
        path: "/leaderboard",
        name: "Leaderboard",
        component: () => import("./views/LeaderboardPage.vue"),
    },
    {
        path: "/analytics",
        name: "Analytics",
        component: () => import("./views/AnalyticsPage.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("./views/LoginPage.vue"),
    },
    {
        path: "/create",
        name: "Create Account",
        component: () => import("./views/CreateAccountPage.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("./views/NotFoundPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
