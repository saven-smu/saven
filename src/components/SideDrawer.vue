<template>
    <div class="drawer h-[800px] max-w-xs p-4">
        <div class="drawer-side">
            <ul
                class="menu h-full overflow-y-auto rounded-xl bg-base-200 p-3 text-base-content"
            >
                <!-- Sidebar content here -->
                <!-- <li><router-link to="/playing">Now Playing</router-link></li> -->
                <li v-for="(navItem, idx) in navItems" :key="idx">
                    <router-link
                        :to="navItem.to"
                        active-class="bg-primary text-primary-content"
                        class="h-14"
                    >
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <!-- <span v-html="navItem.icon"></span> -->
                        {{ navItem.navName }}
                    </router-link>
                </li>
                <!-- <li @click="handleLogout">
                    <span>Logout</span>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const navItems = [{ navName: "Analytics", to: "/analytics" }];
</script>

<style scoped></style>
