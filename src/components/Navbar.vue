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

                <router-link to="/aboutus">
                    <li><a>About Us</a></li>
                </router-link>
            </ul>
            <button
                class="btn-secondary btn"
                @click="login"
                v-if="!isAuthenticated"
            >
                Sign Up / Login
            </button>
            <div class="dropdown-end dropdown" v-else>
                <label tabindex="0" class="btn-ghost btn-circle avatar btn">
                    <div class="w-12 rounded-full" v-if="userRes.user.value">
                        <span v-html="getAvatar(userRes.user.value.id)"></span>
                    </div>
                </label>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                >
                    <router-link to="/edit">
                        <li>
                            <a class="justify-between"> Profile </a>
                        </li>
                    </router-link>
                    <router-link to="/analytics">
                        <li>
                            <a class="justify-between">
                                Analytics
                                <span class="badge">New</span>
                            </a>
                        </li></router-link
                    >
                    <li @click="onClickLogout"><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { createUser, getUserByEmail } from "../composables/api/user";
import { storeToRefs } from "pinia";
import getAvatar from "../composables/AvatarGenerator";

const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
const router = useRouter();
const userStore = useUserStore();
const userRes = storeToRefs(userStore);

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
