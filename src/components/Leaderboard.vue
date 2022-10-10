<template>
    <div class="overflow-x-auto w-full">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- change hover colour? -->
                <tr class="hover" v-for="row in leaderboardArr" :key="row.id">
                    <th>{{ row.position }}</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <span v-html="createAvatar(style, {seed: row.id})"></span>
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">{{ row.user }}</div>
                                <span v-if="row.position === 1" class="badge badge-ghost badge-sm">🏅 Top 10, Aug 2022 🏅</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        {{ row.computedScore }}
                    </td>
                    <th>
                        <div class="collapse">
                            <input type="checkbox" />
                            <div class="collapse-title btn btn-ghost btn-xs justify-start text-[#838383] underline">
                                more details
                            </div>
                            <div class="collapse-content">
                                <div class="overflow-x-auto">
                                    <table class="table w-full">
                                        <thead>
                                            <tr>
                                                <th>Thing</th>
                                                <th>Amount</th>
                                                <th>Improvement</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/open-peeps';

let svg = createAvatar(style, {
  seed: 'custom-seed',
  // ... and other options
});

const leaderboardArr = [{ id: "abple", position: 1, computedScore: 122, leaderboard: "4321", user: "syoongyman" },
                        { id: "pearby", position: 2, computedScore: 118.3, leaderboard: "1325", user: "BOPEH" },
                        { id: "j", position: 3, computedScore: 110.6, leaderboard: "4735", user: "somethingSimple" },
                        { id: "solgoddess", position: 4, computedScore: 109, leaderboard: "7865", user: "Solgod" },
                        { id: "yumyumbanana", position: 5, computedScore: 92.4, leaderboard: "2345", user: "nakirikai" },
                        { id: "nanoosnat", position: 6, computedScore: 85, leaderboard: "3856", user: "Choppy" },
                        { id: "noacl", position: 7, computedScore: 77.8, leaderboard: "1634", user: "selffallingflour" },
                        { id: "womanintech", position: 8, computedScore: 70.6, leaderboard: "8265", user: "ChewChewTrain" },
                        { id: "menintech", position: 9, computedScore: 35.6, leaderboard: "9254", user: "Veronica" },
                        { id: "iamnotstraight", position: 10, computedScore: 20, leaderboard: "3853", user: "chocobopi" }];
</script>


<style scoped>
/* .details {} */
</style>