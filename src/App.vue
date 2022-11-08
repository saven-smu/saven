<template>
    <main>
        <Navbar />
        <div
            class="w-full bg-gradient-to-b from-primary to-white flex"
            :class="containerClass"
        >
            <SideDrawer v-if="isPrivatePages" />
            <router-view
                class="max-h-full w-2/3 flex-grow"
                :class="{ 'overflow-y-scroll': isPrivatePages }"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import SideDrawer from "./components/SideDrawer.vue";

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
                newRouteName.toString() === "Settings")
        )
            isPrivatePages.value = true;
        else isPrivatePages.value = false;
    },
);
</script>

<style scoped></style>
