<template>
    <div class="overflow-x-auto w-full">
        <table class="table w-full">
            <!-- head -->
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                    <th>Amount saved</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr class="hover">
                    <th>{{ rank }}</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://cdn.discordapp.com/attachments/714005602967224323/1015678209993478144/unknown.png"
                                        alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Hugh Amongus</div>
                                <span class="badge badge-ghost badge-sm">🏅 Top 10, Aug 2022 🏅</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        4328
                        <br>
                    </td>
                    <td>$560.32</td>
                    <th>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-xs">drop Details</label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-200">
                                <div class="overflow-x-auto">
                                    <table class="table w-full">
                                        <!-- head -->
                                        <thead>
                                            <tr>
                                                <th>Thing</th>
                                                <th>Amount</th>
                                                <th>Increase</th>
                                            </tr>
                                            <tr> 
                                                <th>$ Saved</th>
                                                <th>$20</th>
                                                <th>↗︎ $3</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </ul>
                        </div>
                    </th>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                    <th>{{ rank }}</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://cdn.discordapp.com/attachments/714005602967224323/1019635423397548073/unknown.png"
                                        alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Brice Swyre</div>
                                <span class="badge badge-ghost badge-sm">5 years of using SavEn!</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        4328
                        <br>
                    </td>
                    <td>$560.32</td>
                    <th>
                        <div class="dropdown dropdown-hover">
                            <label tabindex="0" class="btn btn-ghost btn-xs">Hover details</label>
                            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-200">
                                <div class="overflow-x-auto">
                                    <table class="table w-full">
                                        <!-- head -->
                                        <thead>
                                            <tr>
                                                <th>Thing</th>
                                                <th>Amount</th>
                                                <th>Increase</th>
                                            </tr>
                                            <tr>
                                                <th>$ Saved</th>
                                                <th>$20</th>
                                                <th>↗︎ $3</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </ul>
                        </div>
                    </th>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                    <th>3</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://cdn.discordapp.com/attachments/714005602967224323/1019650743801753661/unknown.png"
                                        alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Marjy Ferencz</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        4328
                        <br>
                    </td>
                    <td>$560.32</td>
                    <th>
                        <div class="collapse">
                            <input type="checkbox" />
                            <div class="collapse-title btn btn-ghost btn-xs justify-start">
                                collapse details
                            </div>
                            <div class="collapse-content">
                                <div class="overflow-x-auto">
                                    <table class="table w-full">
                                        <!-- head -->
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
                        <!-- <label for="modal-details" class="btn btn-ghost btn-xs">collapse details</label> -->
                    </th>
                </tr>
                <!-- row 4 -->
                <tr class="hover">
                    <th>4</th>
                    <td>
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="https://cdn.discordapp.com/attachments/714005602967224323/1015678445000327278/unknown.png"
                                        alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Yancy Tear</div>
                                <span class="badge badge-ghost badge-sm">🏆 Rank 1, Feb 2021 🏆</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        4328
                        <br>
                    </td>
                    <td>$560.32</td>
                    <th>
                        <label for="modal-details" class="btn btn-ghost btn-xs">Modal details</label>
                    </th>
                </tr>
            </tbody>

        </table>
    </div>

    <input type="checkbox" id="modal-details" class="modal-toggle" />
    <label for="modal-details" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Thing</th>
                            <th>Amount</th>
                            <th>Increase</th>
                        </tr>
                        <tr>
                            <th>$ Saved</th>
                            <th>$20</th>
                            <th>↗︎ $3</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </label>
    </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const rank = ref(1);
const incrementRank = () => {
    rank.value++
}
</script>


<style scoped>
.details {}
</style>