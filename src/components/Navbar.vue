<template>
    <div class="navbar bg-primary">
        <div class="navbar-start">
            <router-link to="/">
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
                        class="z-40 dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
                    >
                        <li><a>Du du du du</a></li>
                        <li><a>Dududu du</a></li>
                    </ul>
                </li>
                <li><a @click="getUserDetails">About Us</a></li>
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
import { createUser, getUserByEmail } from "../composables/api/user";

const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();

const login = async () => {
    try {
        await loginWithPopup();
        if (user.value.email) {
            const userRes = await getUserByEmail(user.value.email);
            console.log(userRes);
            if (userRes) {
                //we just set the user data here
            } else {
                const res = await createUser(
                    user.value.name || "TestUser",
                    user.value.email,
                    "Singapore",
                    "BG",
                    5,
                );
                console.log(res);
            }
        }
    } catch (error) {}
};

const onClickLogout = async () => {
    try {
        await logout();
    } catch (error) {}
};

const getUserDetails = async () => {
    try {
        console.log(user.value);
    } catch (error) {}
};
</script>

<style scoped></style>
