<template>
    <div class="card bg-white p-8">
        <div class="card-title">Electricity Cost</div>

        <Line
            :chart-data="chartData"
            :chart-options="chartOptions"
            class="card-body"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { BillChartData } from "../types/bill";
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
import { Utility } from "../types/utility";

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
    utilityDataMap: Map<string, BillChartData>;
    utilityType: Utility;
}>();
const chartOptions: TChartOptions<"line"> = {
    responsive: true,
};

const chartData = computed(() => {
    const retData: TChartData<"line"> = {
        labels: [],
        datasets: [{ label: `${props.utilityType} Cost`, data: [] }],
    };

    for (const [key, value] of props.utilityDataMap.entries()) {
        retData.labels?.push(key);
        let valueToPush = 0;
        switch (props.utilityType) {
            case Utility.ELECTRICITY:
                valueToPush = value.totalElectricityCost;
                break;
            case Utility.WATER:
                valueToPush = value.totalWaterCost;
                break;
            case Utility.GAS:
                valueToPush = value.totalGasCost;
                break;
            case Utility.OVERALL:
                valueToPush =
                    value.totalElectricityCost +
                    value.totalGasCost +
                    value.totalWaterCost;
                break;
            default:
                break;
        }
        retData.datasets[0].data.push(
            currency(valueToPush, {
                fromCents: true,
                precision: 4,
            }).value,
        );
    }

    return retData;
});
</script>

<style scoped></style>
