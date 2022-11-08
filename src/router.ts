import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";
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
        beforeEnter: authGuard,
    },
    {
        path: "/edit",
        name: "Edit Account",
        component: () => import("./views/EditAccountPage.vue"),
        beforeEnter: authGuard,
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
    {
        path: "/aboutus",
        name: "About Us",
        component: () => import("./views/AboutUs.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
