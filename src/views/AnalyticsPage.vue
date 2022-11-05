<template>
    <div class="bg-gradient-to-b from-primary to-white">
        <div class="container mx-auto pt-8">{{ auth }}</div>
    </div>
</template>

<script setup lang="ts">
import auth from "../auth";

const { user } = auth;
</script>

<style scoped></style>
