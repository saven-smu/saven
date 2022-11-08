<template>
    <div class="container mx-auto">
        <div class="tabs">
        <a class="tab tab-bordered">Electricity</a> 
        <a class="tab tab-bordered tab-active">Water</a> 
        <a class="tab tab-bordered">Gas</a>
        <a class="tab tab-bordered">Overall</a>
        </div>
        <select class="select select-bordered w-full max-w-xs" @change="onChange($event)">
            <option disabled selected>Time Window</option>
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
        </select>
        <Leaderboard v-motion-slide-top />
    </div>
</template>

<script setup lang="ts">
import Leaderboard from "../components/Leaderboard.vue";
import { onMounted, ref } from "vue";
import { getLeaderboard } from "../composables/api/leaderboard";
import { getUserLeaderboard } from "../composables/api/userLeaderboard";



function onChange(ev: Event){
    const target = ev.target as HTMLInputElement
    if(target){
        const timeWindow = target.value;
        let timeWindowCode = 0;
        switch(timeWindow){
            case "Day":
                timeWindowCode = 1;
                break;
            case "Week":
                timeWindowCode = 2;
                break;
            case "Month":
                timeWindowCode = 3;
                break;
    }
    }
    const res = getLeaderboard();
}
console
</script>

<style scoped>

</style>
