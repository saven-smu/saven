<template>
    <div class="card bg-base-100 p-4 shadow-md shadow-gray-500/20 w-full mb-8">
        <Line
            :chart-data="chartData"
            :chart-options="chartOptions"
            class="card-body"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from "@vue/reactivity";
import { Bill, BillChartData } from "../types/bill";
import currency from "currency.js";
import { Line } from "vue-chartjs";
import { TChartData, TChartOptions } from "vue-chartjs/dist/types";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
);

const props = defineProps<{
    bills: Bill[];
}>();
const chartOptions: Ref<TChartOptions<"line">> = ref({
    responsive: true,
    aspectRatio: 4,
});

const chartData = computed(() => {
    const retData: TChartData<"line"> = {
        labels: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
        ],
        datasets: [
            {
                borderColor: "#FFEE93",
                label: `Electricity`,
                data: [],
            },
            {
                borderColor: "#A0CED9",
                label: `Water`,
                data: [],
            },
            {
                borderColor: "#68EC78",
                label: `Gas`,
                data: [],
            },
        ],
    };

    // Set the data for the line chart
    for (const bill of props.bills) {
        // Choose which data based on the utility type passed in
        retData.datasets[0].data.push(
            currency(bill.electricityCost, {
                fromCents: true,
                precision: 3,
            }).value,
        );
        retData.datasets[1].data.push(
            currency(bill.waterCost, {
                fromCents: true,
                precision: 3,
            }).value,
        );
        retData.datasets[2].data.push(
            currency(bill.gasCost, {
                fromCents: true,
                precision: 6,
            }).value,
        );
    }

    return retData;
});
</script>

<style scoped></style>
