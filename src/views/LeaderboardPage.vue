<template>
    <div class="bg-gradient-to-b from-primary to-white">
        <div class="container mx-auto pt-8">
            <Leaderboard v-motion-slide-top />
        </div>
    </div>
</template>

<script setup lang="ts">
import Leaderboard from "../components/Leaderboard.vue";
</script>

<style scoped></style>
