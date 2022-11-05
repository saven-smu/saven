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
                        class="dropdown-content menu rounded-box z-40 w-52 bg-base-100 p-2 shadow"
                    >
                        <li><a>Du du du du</a></li>
                        <li><a>Dududu du</a></li>
                    </ul>
                </li>
                <li><a @click="getUserDetails">About Us</a></li>
            </ul>
            <button
                class="btn-secondary btn"
                @click="login"
                v-if="!isAuthenticated"
            >
                Sign Up / Login
            </button>
            <button class="btn-secondary btn" @click="onClickLogout" v-else>
                Logout
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { createUser, getUserByEmail } from "../composables/api/user";

const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
    try {
        await loginWithPopup();
        // On success, we want to push them to the create account page
        if (user.value.email) {
            const userDetails = await getUserByEmail(user.value.email);
            if (userDetails) {
                // Set the retrieved details here
                userStore.setUser(userDetails);
            } else {
                router.push("/create");
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
