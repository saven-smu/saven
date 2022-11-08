<template>
    <div class="container mx-auto">
        <div class="mb-1 flex justify-between">
            <div class="tabs">
                <a
                    class="tab tab-bordered"
                    :class="{ 'tab-active': utilityIndex === 1 }"
                    @click="changeUtility(1)"
                >
                    Electricity
                </a>
                <a
                    class="tab tab-bordered"
                    :class="{ 'tab-active': utilityIndex === 2 }"
                    @click="changeUtility(2)"
                    >Water</a
                >
                <a
                    class="tab tab-bordered"
                    :class="{ 'tab-active': utilityIndex === 3 }"
                    @click="changeUtility(3)"
                >
                    Gas
                </a>
                <a
                    class="tab tab-bordered"
                    :class="{ 'tab-active': utilityIndex === 4 }"
                    @click="changeUtility(4)"
                >
                    Overall
                </a>
            </div>
            <select
                class="select-bordered select w-full max-w-xs"
                @change="onChange($event)"
            >
                <option value="1" :selected="timeIndex === 1">Day</option>
                <option value="2" :selected="timeIndex === 2">Week</option>
                <!-- <option value="3">Month</option> -->
            </select>
        </div>
        <LeaderboardTable
            v-motion-slide-top
            :leaderboard-date="leaderboardDate"
            :leaderboard="leaderboardArrRef"
        />
    </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/shared";
import LeaderboardTable from "../components/Leaderboard.vue";
import { onMounted, Ref, ref } from "vue";
import { getLeaderboard } from "../composables/api/leaderboard";
import { getUserLeaderboard } from "../composables/api/userLeaderboard";
import { UserLeaderboard } from "../types/userLeaderboard";
import { getUserById } from "../composables/api/user";
import dayjs from "dayjs";
import { Leaderboard } from "../types/leaderboard";

const leaderboardArrRef: Ref<UserLeaderboard[]> = ref([]);
const utilityIndex = ref(4);
const timeIndex = ref(1);
const leaderboardDate = ref("");

onMounted(() => {
    populateLeaderboard();
});

const populateLeaderboard = useDebounceFn(async () => {
    const leaderboardRes = await getLeaderboard(
        utilityIndex.value,
        timeIndex.value,
    );
    const today = new Date();
    let leaderboardToCheck = leaderboardRes.filter((leaderboard) => {
        if (timeIndex.value === 1) {
            const res =
                dayjs(leaderboard.storedDateTime).format("DD/MM/YYYY") ===
                dayjs(today).subtract(2, "days").format("DD/MM/YYYY");
            if (res) {
                leaderboardDate.value = dayjs(today).format("DD MMM YYYY");
                return true;
            }
        } else {
            return true;
        }
    });
    if (timeIndex.value === 2) {
        leaderboardToCheck.sort((first: Leaderboard, second: Leaderboard) =>
            dayjs(first.storedDateTime).isAfter(dayjs(second.storedDateTime))
                ? 1
                : -1,
        );
    }

    if (leaderboardToCheck.length > 0) {
        const res = await getUserLeaderboard();
        if (res) {
            const all = res.filter(
                (obj) => obj.leaderboard === leaderboardToCheck[0].id,
            );
            const resAll = await Promise.all(
                all.map(async (entry) => {
                    entry.id = await getUserName(entry.user);
                    return entry;
                }),
            );
            const sorted = resAll.sort(
                (firstObject: UserLeaderboard, secondObject: UserLeaderboard) =>
                    firstObject.position > secondObject.position ? 1 : -1,
            );
            leaderboardArrRef.value = sorted.slice(0, 10);
        }
    }
}, 1000);

const getUserName = async (id: string) => {
    const res = await getUserById(id);
    const name = res?.name || "";
    return name;
};

function onChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    if (target) {
        timeIndex.value = Number(target.value);
    }
    populateLeaderboard();
}

function changeUtility(index: number) {
    utilityIndex.value = index;
    populateLeaderboard();
}
</script>

<style scoped></style>
