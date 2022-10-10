<template>
    <div class="w-full overflow-x-auto rounded-xl bg-base-100 px-16 py-6 shadow-xl shadow-primary/30">
        <div>
            <div class="grid grid-cols-12 font-bold">
                <div class="col-span-1">Rank</div>
                <div class="col-span-5">Username</div>
                <div class="col-span-2">Score</div>
                <div class="col-span-4"></div>
            </div>

            <div
                class="mt-4 grid grid-cols-12"
                v-for="entry in leaderboardArrRef"
                :key="entry.id"
            >
                <div class="col-span-1 flex items-center">
                    {{ entry.position }}
                </div>
                <div class="col-span-5">
                    <div class="flex items-center space-x-3">
                        <div class="mask mask-squircle h-12 w-12">
                            <span
                                v-html="
                                    createAvatar(style, {
                                        seed: entry.id,
                                    })
                                "
                            ></span>
                        </div>
                        <div>
                            <div class="font-bold">{{ entry.user }}</div>
                            <span
                                v-if="entry.position === 1"
                                class="badge badge-ghost badge-sm"
                            >
                                🏅 Top 10, Aug 2022 🏅
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 flex items-center">
                    {{ entry.computedScore }}
                </div>
                <div class="col-span-4 flex items-center">
                    <div class="collapse">
                        <input type="checkbox" />
                        <div
                            class="btn btn-ghost btn-xs collapse-title justify-start text-[#838383] underline"
                        >
                            more details
                        </div>
                        <div class="collapse-content">
                            <div class="overflow-x-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/open-peeps";
import { onMounted, Ref, ref } from "vue";

const leaderboardArr = [
    {
        id: "abple",
        position: 1,
        computedScore: 122,
        leaderboard: "4321",
        user: "syoongyman",
    },
    {
        id: "pearby",
        position: 2,
        computedScore: 118.3,
        leaderboard: "1325",
        user: "BOPEH",
    },
    {
        id: "j",
        position: 3,
        computedScore: 110.6,
        leaderboard: "4735",
        user: "somethingSimple",
    },
    {
        id: "solgoddess",
        position: 4,
        computedScore: 109,
        leaderboard: "7865",
        user: "Solgod",
    },
    {
        id: "yumyumbanana",
        position: 5,
        computedScore: 92.4,
        leaderboard: "2345",
        user: "nakirikai",
    },
    {
        id: "nanoosnat",
        position: 6,
        computedScore: 85,
        leaderboard: "3856",
        user: "Choppy",
    },
    {
        id: "noacl",
        position: 7,
        computedScore: 77.8,
        leaderboard: "1634",
        user: "selffallingflour",
    },
    {
        id: "womanintech",
        position: 8,
        computedScore: 70.6,
        leaderboard: "8265",
        user: "ChewChewTrain",
    },
    {
        id: "menintech",
        position: 9,
        computedScore: 35.6,
        leaderboard: "9254",
        user: "Veronica",
    },
    {
        id: "iamnotstraight",
        position: 10,
        computedScore: 20,
        leaderboard: "3853",
        user: "chocobopi",
    },
];

const leaderboardArrRef: Ref<any[]> = ref([]);

onMounted(() => {
    for (const entry of leaderboardArr) {
        leaderboardArrRef.value.push(entry);
    }
});
</script>

<style scoped></style>
