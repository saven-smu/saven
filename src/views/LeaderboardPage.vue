<template>
    <div class="tabs">
        <div class="absolute inset-x-0 top-10 h-16 ...">
            <a class="tab tab-bordered">Tab 1</a>
            <a class="tab tab-bordered tab-active">Tab 2</a>
            <a class="tab tab-bordered">Tab 3</a>
        </div>
    </div>

    <div class="container mx-auto">
        <Leaderboard v-motion-slide-top />
    </div>
</template>

<script setup lang="ts">
import Leaderboard from "../components/Leaderboard.vue";
import { onMounted, ref } from "vue";
import { getLeaderboard } from "../composables/api/leaderboard";
import { getUserLeaderboard } from "../composables/api/userLeaderboard";

</script>

<style scoped>

</style>
