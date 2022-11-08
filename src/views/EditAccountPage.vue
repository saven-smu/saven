<template>
    <div class="mx-auto max-w-md">
        <form
            class="mx-auto mt-16 flex flex-col items-center space-y-4 rounded-xl bg-white p-4"
            @submit.prevent="handleOnSubmit"
        >
            <h1 class="prose-xl font-bold">Edit your details!</h1>
            <div class="form-control w-full max-w-xs">
                <label for="name" class="label text-sm font-medium">
                    <span class="label-text">Name</span>
                </label>
                <div class="relative mt-1">
                    <input
                        id="name"
                        v-model="name"
                        type="text"
                        placeholder="Name"
                        class="input-bordered input w-full max-w-xs"
                        required
                    />
                </div>
            </div>
            <div class="form-control w-full max-w-xs">
                <label for="email" class="label text-sm font-medium">
                    <span class="label-text">Email</span>
                </label>
                <div class="relative mt-1" v-if="user">
                    <input
                        v-model="user.email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        class="input-bordered input w-full max-w-xs"
                        disabled
                        required
                    />
                </div>
            </div>

            <div class="form-control w-full max-w-xs">
                <label for="address" class="label text-sm font-medium">
                    <span class="label-text">Address</span>
                </label>
                <div class="relative mt-1">
                    <input
                        v-model="address"
                        id="address"
                        type="text"
                        placeholder="Address"
                        class="input-bordered input w-full max-w-xs"
                        required
                    />
                </div>
            </div>

            <div class="form-control w-full max-w-xs">
                <label for="housingType" class="label text-sm font-medium">
                    <span class="label-text">Housing Type</span>
                </label>
                <div class="relative mt-1">
                    <select
                        id="housingType"
                        v-model="housingType"
                        class="select-bordered select w-full max-w-xs"
                        required
                    >
                        <option value="HDB1">1-Room Flat(HDB)</option>
                        <option value="HDB2">2-Room Flat(HDB)</option>
                        <option value="HDB3">3-Room Flat(HDB)</option>
                        <option value="HDB4">4-Room Flat(HDB)</option>
                        <option value="HDB5">5-Room Flat(HDB)</option>
                        <option value="BG">Bungalow</option>
                        <option value="SD">Semi-Detached House</option>
                        <option value="TR">Terrace House</option>
                        <option value="CM">Condominium</option>
                        <option value="ECM">Executive Condominium</option>
                        <option value="SH">Shophouse</option>
                    </select>
                </div>
            </div>

            <div class="form-control w-full max-w-xs">
                <label for="housingType" class="label text-sm font-medium">
                    <span class="label-text">No. of household members</span>
                </label>
                <div class="relative mt-1">
                    <input
                        v-model="householdMembers"
                        type="number"
                        placeholder="No. of household members"
                        class="input-bordered input w-full max-w-xs"
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                class="btn-primary btn-xl btn mt-2 w-full max-w-xs"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted,ref } from "vue";
import { createUser, getUserByEmail, getUserById, updateUserById } from "../composables/api/user";

const { user } = storeToRefs(useUserStore());
const name = ref("");
const address = ref("");
const housingType = ref("");
const householdMembers = ref(1);

onMounted(async () => {
    const res = await getUserById(user.value?.id || "");
    name.value = res?.name || "";
    address.value = res?.address || "";
    housingType.value = res?.housingType || "";
    householdMembers.value = res?.householdMembers || 0;
});

const handleOnSubmit = async () => {
    try {
        if (user.value) {
            const res = await updateUserById(
                user.value?.id,
                user.value.name || "TestUser",
                user.value.email,
                address.value,
                housingType.value,
                householdMembers.value,
                user.value.credits
            );
        }
    } catch (error) {}
};
</script>

<style scoped></style>
