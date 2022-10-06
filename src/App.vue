<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Leaderboard from "./components/Leaderboard.vue";
</script>

<template>
    <main>
        <div class="mt-4 w-full px-2"><router-view /></div>
    </main>
</template>

<style scoped></style>
