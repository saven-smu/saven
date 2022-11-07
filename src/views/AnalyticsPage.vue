<template>
    <div class="bg-gradient-to-b from-primary to-white">
        <div class="container mx-auto grid gap-4 px-12 md:grid-cols-2">
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.OVERALL"
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.OVERALL"
                is-cost
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.ELECTRICITY"
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.ELECTRICITY"
                is-cost
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.WATER"
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.WATER"
                is-cost
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.GAS"
            />
            <UtilityChart
                :utility-data-map="bills"
                :avg-data-map="avgBills"
                :utility-type="Utility.GAS"
                is-cost
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { getBillsByUserIDAndDays } from "../composables/api/bill";
import { Bill, BillChartData } from "../types/bill";
import { onMounted, ref } from "vue";
import UtilityChart from "../components/UtilityChart.vue";
import { Utility } from "../types/utility";

const { user } = storeToRefs(useUserStore());
const bills = ref<Map<string, BillChartData>>(new Map());
const avgBills = ref<Map<string, BillChartData>>(new Map());

onMounted(() => {
    getBills();
});

const getBills = async () => {
    if (user.value) {
        const res = await getBillsByUserIDAndDays(user.value.id, 7);
        const avgUserRes = await getBillsByUserIDAndDays(
            import.meta.env.VITE_AVG_USER,
            7,
        );

        const tmpMap: Map<string, BillChartData> = new Map();
        const formatter = new Intl.DateTimeFormat("en-SG");
        if (res) {
            for (const bill of res) {
                const date = formatter.format(new Date(bill.storedDateTime));
                let dataToPush = tmpMap.get(date);
                if (dataToPush) {
                    dataToPush.bills.push(bill);
                    dataToPush.totalElectricityCost += bill.electricityCost;
                    dataToPush.totalWaterCost += bill.waterCost;
                    dataToPush.totalGasCost += bill.gasCost;
                    dataToPush.totalElectricityUsed += bill.electricityUsed;
                    dataToPush.totalWaterUsed += bill.waterUsed;
                    dataToPush.totalGasUsed += bill.gasUsed;
                } else {
                    dataToPush = <BillChartData>{
                        bills: [bill],
                        totalElectricityCost: bill.electricityCost,
                        totalWaterCost: bill.waterCost,
                        totalGasCost: bill.gasCost,
                        totalElectricityUsed: bill.electricityUsed,
                        totalWaterUsed: bill.waterUsed,
                        totalGasUsed: bill.gasUsed,
                    };
                }

                tmpMap.set(date, dataToPush);
            }
            bills.value = new Map(
                [...tmpMap.entries()].sort((entryA, entryB) => {
                    return (
                        new Date(entryA[0]).getTime() -
                        new Date(entryB[0]).getTime()
                    );
                }),
            );
            tmpMap.clear();
        }

        if (avgUserRes) {
            for (const bill of avgUserRes) {
                const date = formatter.format(new Date(bill.storedDateTime));
                let dataToPush = tmpMap.get(date);
                if (dataToPush) {
                    dataToPush.bills.push(bill);
                    dataToPush.totalElectricityCost += bill.electricityCost;
                    dataToPush.totalWaterCost += bill.waterCost;
                    dataToPush.totalGasCost += bill.gasCost;
                    dataToPush.totalElectricityUsed += bill.electricityUsed;
                    dataToPush.totalWaterUsed += bill.waterUsed;
                    dataToPush.totalGasUsed += bill.gasUsed;
                } else {
                    dataToPush = <BillChartData>{
                        bills: [bill],
                        totalElectricityCost: bill.electricityCost,
                        totalWaterCost: bill.waterCost,
                        totalGasCost: bill.gasCost,
                        totalElectricityUsed: bill.electricityUsed,
                        totalWaterUsed: bill.waterUsed,
                        totalGasUsed: bill.gasUsed,
                    };
                }

                tmpMap.set(date, dataToPush);
            }
            avgBills.value = new Map(
                [...tmpMap.entries()].sort((entryA, entryB) => {
                    return (
                        new Date(entryA[0]).getTime() -
                        new Date(entryB[0]).getTime()
                    );
                }),
            );
        }

        tmpMap.clear();
    }
};
</script>

<style scoped></style>
