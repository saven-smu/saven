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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
