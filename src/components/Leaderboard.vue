<template>
    <div
        class="w-full overflow-x-auto rounded-xl bg-base-100 px-16 py-6 shadow-xl shadow-primary/30"
    >
        <div>
            <div class="grid grid-cols-12 font-bold">
                <div class="col-span-1">Rank</div>
                <div class="col-span-5">Username</div>
                <div class="col-span-2">Score</div>
                <div class="col-span-4"></div>
            </div>

            <div
                class="mt-4 grid grid-cols-12"
                v-for="entry in props.leaderboard"
                :key="entry.id"
            >
                <div class="col-span-1 flex items-center">
                    {{ entry.position }}
                </div>
                <div class="col-span-5">
                    <div class="flex items-center space-x-3">
                        <div class="mask mask-squircle h-12 w-12">
                            <span v-html="getAvatar(entry.id)"></span>
                        </div>
                        <div>
                            <div class="font-bold">{{ entry.id }}</div>
                            <span
                                v-if="entry.position === 1"
                                class="badge-ghost badge badge-sm"
                            >
                                🏅 First, {{ leaderboardDate }} 🏅
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
                            class="collapse-title btn-ghost btn-xs btn justify-start text-[#838383] underline"
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
import getAvatar from "../composables/AvatarGenerator";
import { UserLeaderboard } from "../types/userLeaderboard";

const props = defineProps<{
    leaderboard: UserLeaderboard[];
    leaderboardDate: string;
}>();
</script>

<style scoped></style>
