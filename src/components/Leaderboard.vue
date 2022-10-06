<template>
    <div class="container mx-auto">
        leaderboard
    </div>
    <!-- <p>{{ arrayOfItems[0] }}</p>
    <p>{{ arrayOfItems[1] }}</p>
    <p>{{ arrayOfItems[2] }}</p>
    <p>{{ arrayOfItems[3] }}</p>
    <p>{{ arrayOfItems[4] }}</p> -->
    <p v-for="(item, idx) in arrayOfItems" :key="idx">{{ item }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    const arrayOfItems = ref(["string", "string2", "string3", "string4", "gay"])
</script>

<style scoped>

</style>