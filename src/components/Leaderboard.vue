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
                            <div class="font-bold">{{ entry.id }}</div>
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
import { getUserLeaderboard } from "../composables/api/userLeaderboard";
import { userLeaderboard } from "../types/userleaderboard";
import { getUserById } from "../composables/api/user";

const leaderboardArrRef: Ref<any[]> = ref([]);

onMounted(async () => {
    const res = await getUserLeaderboard();
    if (res){
        const all = res.filter(obj => obj.leaderboard === 'ceea60a9-aa72-4e26-9c7d-7d51ffb7faf0');
        const sortAll = all.sort(
        (firstObject: userLeaderboard, secondObject: userLeaderboard) =>
            (firstObject.position > secondObject.position) ? 1 : -1
    );
    for (const entry of sortAll) {
            entry.id = await getUserName(entry.user);
            leaderboardArrRef.value.push(entry);
        }
    }
});

const getUserName = async (id: string) =>{
    const res = await getUserById(id);
    const name = res?.name || "" ;
    return name;
}
</script>

<style scoped></style>
