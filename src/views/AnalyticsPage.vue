<template>
    <div class="container mx-auto grid gap-4 p-4 px-12 md:grid-cols-2">
        <p class="col-span-full mb-8 text-6xl">Today you have used</p>
        <div class="col-span-full flex justify-evenly">
            <DailyUtilityChart :bills="dailyBills" />
        </div>
        <p class="col-span-full my-8 text-6xl">
            Compared to the previous 7 days, you saw...
        </p>
        <div class="col-span-full flex justify-evenly">
            <DifferenceBox
                v-motion-pop
                title="Electricity"
                :percentage-val="costSavedElectricity"
                is-cost
            />
            <DifferenceBox
                v-motion-pop
                title="Water"
                :percentage-val="costSavedWater"
                is-cost
            />
            <DifferenceBox
                v-motion-pop
                title="Gas"
                :percentage-val="costSavedGas"
                is-cost
            />
            <DifferenceBox
                v-motion-pop
                title="Electricity"
                :percentage-val="amtSavedElectricity"
            />
            <DifferenceBox
                v-motion-pop
                title="Water"
                :percentage-val="amtSavedWater"
            />
            <DifferenceBox
                v-motion-pop
                title="Gas"
                :percentage-val="amtSavedGas"
            />
        </div>

        <p class="col-span-full my-8 text-6xl">Your charts</p>
        <UtilityChart
            v-motion-slide-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.OVERALL"
        />
        <UtilityChart
            v-motion-slide-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.OVERALL"
            is-cost
        />
        <UtilityChart
            v-motion-slide-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.ELECTRICITY"
        />
        <UtilityChart
            v-motion-slide-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.ELECTRICITY"
            is-cost
        />
        <UtilityChart
            v-motion-slide-visible-once-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.WATER"
        />
        <UtilityChart
            v-motion-slide-visible-once-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.WATER"
            is-cost
        />
        <UtilityChart
            v-motion-slide-visible-once-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.GAS"
        />
        <UtilityChart
            v-motion-slide-visible-once-top
            :utility-data-map="bills"
            :avg-data-map="avgBills"
            :utility-type="Utility.GAS"
            is-cost
        />
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
import DifferenceBox from "../components/DifferenceBox.vue";
import DailyUtilityChart from "../components/DailyUtilityChart.vue";

const { user } = storeToRefs(useUserStore());
const bills = ref<Map<string, BillChartData>>(new Map());
const dailyBills = ref<Bill[]>([]);
const avgBills = ref<Map<string, BillChartData>>(new Map());
const costSavedWater = ref(0),
    costSavedElectricity = ref(0),
    costSavedGas = ref(0);
const amtSavedWater = ref(0),
    amtSavedElectricity = ref(0),
    amtSavedGas = ref(0);

onMounted(() => {
    getBills();
});

const getBills = async () => {
    if (user.value) {
        const res = await getBillsByUserIDAndDays(user.value.id, 14);
        const avgUserRes = await getBillsByUserIDAndDays(
            import.meta.env.VITE_AVG_USER,
            7,
        );

        if (res) {
            bills.value = getComputedBillData(res);

            // We also want to find the amount saved
            const mapAsArr = [...res.entries()];
            const prevDataArr = mapAsArr.slice(6);
            const currDataArr = mapAsArr.slice(7, res.length);
            dailyBills.value = [...bills.value.values()][
                [...bills.value.values()].length - 1
            ].bills;

            let prevWeekWaterCost = 0,
                prevWeekGasCost = 0,
                prevWeekElectricityCost = 0;

            let prevWeekWaterUsed = 0,
                prevWeekGasUsed = 0,
                prevWeekElectricityUsed = 0;

            for (const [key, value] of prevDataArr) {
                prevWeekWaterCost += value.waterCost;
                prevWeekGasCost += value.gasCost;
                prevWeekElectricityCost += value.electricityCost;
                prevWeekWaterUsed += value.waterUsed;
                prevWeekGasUsed += value.gasUsed;
                prevWeekElectricityUsed += value.electricityUsed;
            }

            let currWeekWaterCost = 0,
                currWeekGasCost = 0,
                currWeekElectricityCost = 0;

            let currWeekWaterUsed = 0,
                currWeekGasUsed = 0,
                currWeekElectricityUsed = 0;

            for (const [key, value] of currDataArr) {
                currWeekWaterCost += value.waterCost;
                currWeekGasCost += value.gasCost;
                currWeekElectricityCost += value.electricityCost;
                currWeekWaterUsed += value.waterUsed;
                currWeekGasUsed += value.gasUsed;
                currWeekElectricityUsed += value.electricityUsed;
            }

            costSavedWater.value = getDifference(
                currWeekWaterCost,
                prevWeekWaterCost,
            );
            costSavedElectricity.value = getDifference(
                currWeekElectricityCost,
                prevWeekElectricityCost,
            );
            costSavedGas.value = getDifference(
                currWeekGasCost,
                prevWeekGasCost,
            );

            amtSavedWater.value = getDifference(
                currWeekWaterUsed,
                prevWeekWaterUsed,
            );
            amtSavedElectricity.value = getDifference(
                currWeekElectricityUsed,
                prevWeekElectricityUsed,
            );
            amtSavedGas.value = getDifference(currWeekGasUsed, prevWeekGasUsed);
        }
        if (avgUserRes) {
            avgBills.value = getComputedBillData(avgUserRes);
        }
    }
};

const getComputedBillData = (billData: Bill[]): Map<string, BillChartData> => {
    const tmpMap: Map<string, BillChartData> = new Map();
    const formatter = new Intl.DateTimeFormat("en-SG");

    for (const bill of billData) {
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

    return new Map(
        [...tmpMap.entries()].sort((entryA, entryB) => {
            return (
                new Date(entryA[0]).getTime() - new Date(entryB[0]).getTime()
            );
        }),
    );
};

const getDifference = (curr: number, prev: number) =>
    ((curr - prev) / ((curr + prev) / 2)) * 100;
</script>

<style scoped></style>
