<template>
    <div class="toast-end toast">
        <div
            class="alert"
            v-for="toastItem in toastQueue"
            :key="toastItem.id"
            :class="`alert-${toastItem.type}`"
        >
            <div>
                <span>{{ toastItem.msg }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toastQueue } from "../composables/ToastHandler";
</script>

<style scoped></style>
