<template>
    <SignUpNavbar />
    <div class="hero bg-gradient-to-b from-primary to-bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="../assets/saven_landing.png" width="600" height="600" />
            <div>
                <!-- how to change text colour help -->
                <h1 class="text-5xl font-bold text-[#ffa97b]">Welcome to SavEn</h1>
                <p class="py-6">
                    Did you know water and energy scarcity are increasingly prevalent all over the world? Save the Earth and stop drinking
                    water.<br><br>

                    Take your step to be more environmentally conscious here.
                </p>
                <router-link to="/login">
                    <button class="btn btn-secondary">Get Started</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SignUpNavbar from "../components/SignUpNavbar.vue";
</script>

<style scoped>

</style>
