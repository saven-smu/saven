<template>
    <LoggedInNavbar />
    <Leaderboard />
    <router-link class="btn btn-primary" to="/">To Landing!</router-link>
</template>

<script setup lang="ts">
    import LoggedInNavbar from "../components/LoggedInNavbar.vue";
    import Leaderboard from "../components/Leaderboard.vue";
</script>

<style scoped>
    
</style>
