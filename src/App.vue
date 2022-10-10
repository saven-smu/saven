<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <main>
        <Navbar />
        <div class="w-full"><router-view /></div>
    </main>
</template>

<style scoped></style>
