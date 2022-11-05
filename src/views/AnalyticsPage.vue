<template>
    <div class="bg-gradient-to-b from-primary to-white">
        <div class="container mx-auto pt-8">{{ user }}</div>
        <button class="btn-primary btn" @click="getBills">getBills</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { getBillsByUserIDAndDays } from "../composables/api/bill";
import { Bill } from "../types/bill";
import { ref } from "vue";

const { user } = storeToRefs(useUserStore());
const bills = ref<Map<string, Bill[]>>(new Map());

const getBills = async () => {
    if (user.value) {
        const res = await getBillsByUserIDAndDays(user.value.id, 7);
        if (res) {
            const formatter = new Intl.DateTimeFormat("en-SG");
            for (const bill of res) {
                const billDate = new Date(bill.storedDateTime);
                const date = formatter.format(billDate);
                let dataToPush = bills.value.get(date);
                if (dataToPush) {
                    dataToPush.push(bill);
                } else {
                    dataToPush = [bill];
                }

                bills.value.set(date, dataToPush);
            }
            console.log(bills.value);
        }
    }
};
</script>

<style scoped></style>
