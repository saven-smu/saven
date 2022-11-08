<template>
    <main>
        <Navbar />
        <div
            class="flex w-full bg-gradient-to-b from-primary to-white"
            :class="containerClass"
        >
            <SideDrawer v-if="isPrivatePages" />
            <router-view class="max-h-full w-2/3 flex-grow" />
        </div>

        <Toast />
    </main>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import SideDrawer from "./components/SideDrawer.vue";
import Toast from "./components/Toast.vue";

const isPrivatePages = ref(false);
const route = useRoute();

const containerClass = computed(() => {
    let retObj = {};
    if (isPrivatePages) {
        retObj = {
            flex: true,
            "max-h-[900px]": true,
        };
    }
    return retObj;
});

watch(
    () => route.name,
    (newRouteName) => {
        if (
            newRouteName &&
            (newRouteName.toString() === "Analytics" ||
                newRouteName.toString() === "Edit Account")
        )
            isPrivatePages.value = true;
        else isPrivatePages.value = false;
    },
);
</script>

<style scoped></style>
