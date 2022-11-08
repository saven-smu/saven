<template>
    <div class="card bg-base-100 p-4 shadow-md shadow-gray-500/20">
        <div class="prose-lg prose card-title">
            {{ props.utilityType }} {{ props.isCost ? "Cost" : "Usage" }}
        </div>

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
    avgDataMap: Map<string, BillChartData>;
    utilityType: Utility;
    isCost?: boolean;
}>();
const chartOptions: Ref<TChartOptions<"line">> = ref({
    responsive: true,
    aspectRatio: 2,
});

const chartData = computed(() => {
    const retData: TChartData<"line"> = {
        labels: [],
        datasets: [
            {
                borderColor: "#FF9B66",
                label: `${props.utilityType} ${
                    props.isCost ? "Cost" : "Usage"
                }`,
                data: [],
            },
            {
                borderColor: "#000000",
                label: `Average`,
                data: [],
            },
        ],
    };

    // Set the line colour for the line chart
    switch (props.utilityType) {
        case Utility.ELECTRICITY:
            retData.datasets[0].borderColor = "#FFEE93";
            break;
        case Utility.WATER:
            retData.datasets[0].borderColor = "#A0CED9";
            break;
        case Utility.GAS:
            retData.datasets[0].borderColor = "#68EC78";
            break;
        default:
            break;
    }

    const utilityDataMapArr = [...props.utilityDataMap.entries()];

    // Set the data for the line chart
    for (const [key, value] of utilityDataMapArr.slice(
        7,
        utilityDataMapArr.length,
    )) {
        retData.labels?.push(key);

        // Choose which data based on the utility type passed in
        retData.datasets[0].data.push(getDataValue(value));
    }

    // Set the average data for the line chart
    for (const [key, value] of props.avgDataMap.entries()) {
        // Choose which data based on the utility type passed in
        retData.datasets[1].data.push(getDataValue(value));
    }

    return retData;
});

const getDataValue = (value: BillChartData): number => {
    let valueToPush = 0;
    let precision = 4;
    if (props.isCost) {
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
                    value.totalWaterCost +
                    value.totalGasCost;
                break;
            default:
                break;
        }
    } else {
        switch (props.utilityType) {
            case Utility.ELECTRICITY:
                valueToPush = value.totalElectricityUsed;
                precision = 3;
                break;
            case Utility.WATER:
                valueToPush = value.totalWaterUsed;
                precision = 6;
                break;
            case Utility.GAS:
                valueToPush = value.totalGasUsed;
                precision = 3;
                break;
            case Utility.OVERALL:
                valueToPush =
                    value.totalElectricityUsed / 1000 +
                    value.totalWaterUsed / 1000000 +
                    value.totalGasUsed / 1000;
                precision = 0;
                break;
            default:
                break;
        }
    }

    return currency(valueToPush, {
        fromCents: true,
        precision: precision,
    }).value;
};
</script>

<style scoped></style>
