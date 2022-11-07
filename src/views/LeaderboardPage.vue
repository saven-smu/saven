<template>
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
