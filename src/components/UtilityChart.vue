<template>
    <div>
        <Line />
    </div>
</template>

<script setup lang="ts">
import { Bill } from '../types/bill';
import { Line } from "vue-chartjs"
import { computed } from '@vue/reactivity';

defineProps<{ utilityDataMap: Map<string, Bill[]> }>();

const chartData = computed(() => {
    const retData = [];
})

</script>

<style scoped>

</style>