<template>
    <SignUpNavbar />
    <div class="hero bg-gradient-to-b from-primary to-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="../assets/saven_homepage.png" width="700" height="700" />
            <div>
                <!-- how to change text colour help -->
                <h1 class="text-5xl font-bold text-secondary">Welcome to SavEn</h1>
                <p class="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
                <router-link to="/LogInPage">
                    <button class="btn btn-secondary">Get Started</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SignUpNavbar from "../components/SignUpNavbar.vue";
</script>

<style scoped></style>
