<template>
    <div class="hero bg-gradient-to-b from-primary to-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="../assets/saven_landing.png" width="600" height="600" />
            <div class="p-8 shadow-accent bg-base-100/40 rounded-box">
                <h1 class="text-5xl font-bold text-secondary">Welcome to SavEn</h1>
                <p class="py-6">
                    Did you know water and energy scarcity are increasingly prevalent all over the world? Save the Earth and stop drinking
                    water.<br><br>

                    Take your step to be more environmentally conscious here.
                </p>
                <router-link to="/leaderboard">
                    <button class="btn btn-secondary text-[#FFFFF9]">Get Started</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
