<template>
    <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img
                src="../assets/saven_landing.png"
                width="600"
                height="600"
                ref="imgRef"
            />
            <div
                class="rounded-box bg-base-100/40 p-8 shadow-accent"
                ref="boxRef"
            >
                <h1 class="text-5xl font-bold text-secondary">
                    Welcome to SavEn
                </h1>
                <p class="py-6">
                    Did you know water and energy scarcity are increasingly
                    prevalent all over the world? Save the Earth and stop
                    drinking water.<br /><br />

                    Take your step to be more environmentally conscious here.
                </p>
                <router-link to="/leaderboard">
                    <button class="btn btn-secondary text-[#FFFFF9]">
                        Get Started
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const imgRef = ref();
const boxRef = ref();

const imgRet = useMotion(imgRef, {
    initial: {
        y: 100,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 350,
            damping: 20,
            delay: 50,
            onComplete: () => {
                imgRet.variant.value = "levitate";
            },
        },
    },
    levitate: {
        y: 10,
        transition: {
            duration: 2000,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
        },
    },
});

useMotion(boxRef, {
    initial: {
        y: 100,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 350,
            damping: 40,
            delay: 20,
        },
    },
});
</script>

<style scoped></style>
