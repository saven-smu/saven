<template>
    <div class="navbar bg-primary">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                >
                    <li><a>Item 1</a></li>
                    <li tabindex="0">
                        <a class="justify-between">
                            Parent
                            <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                                />
                            </svg>
                        </a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <router-link to="/" class="flex-1">
                <picture>
                    <source
                        srcset="../assets/saven_logo_56px.webp"
                        type="image/webp"
                    />
                    <img class="max-h-14" src="../assets/saven_logo.png" />
                </picture>
            </router-link>
        </div>
        <div class="navbar-end">
            <ul class="menu menu-horizontal p-0">
                <li>
                    <a>
                        <router-link to="/leaderboard">
                            Leaderboard
                        </router-link>
                    </a>
                </li>
                <li tabindex="0">
                    <!-- the hover part idk why its not staying when i hover over it :sob: -->
                    <!-- also the hover box goes under the artwork idk how to fix that will relook -->
                    <a>
                        Hover Me
                        <svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            />
                        </svg>
                    </a>
                    <ul
                        class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                    >
                        <li><a>Du du du du</a></li>
                        <li><a>Dududu du</a></li>
                    </ul>
                </li>
                <li><a>About Us</a></li>
            </ul>
            <button
                class="btn btn-secondary"
                @click="login"
                v-if="!isAuthenticated"
            >
                Sign Up / Login
            </button>
            <button class="btn btn-secondary" @click="onClickLogout" v-else>
                Logout
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated, loginWithPopup, logout } = useAuth0();

const login = async () => {
    try {
        await loginWithPopup();
    } catch (error) {}
};
const onClickLogout = async () => {
    try {
        await logout();
    } catch (error) {}
};
</script>

<style scoped></style>
