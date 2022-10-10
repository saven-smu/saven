<template>
    <SignUpNavbar />
    <!-- <HelloWorld msg="Now with vue-router!" /> -->
    <!-- <router-link class="btn btn-primary" to="/leaderboard">To Leaderboard!</router-link> -->
    <div class="hero min-h-screen" style="background-image: url(https://cdn.discordapp.com/attachments/853567678479597578/1028895003415679036/landing_page_idea_3.png);">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src="https://cdn.discordapp.com/attachments/853567678479597578/1028893068746825799/saven_homepage.png" width="700" height="700"/>
            <div>
                <!-- how to change text colour help -->
                <h1 class="text-5xl font-bold">Welcome to SavEn</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <router-link to="/LogInPage"><button class="btn btn-primary">Get Started</button></router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SignUpNavbar from "../components/SignUpNavbar.vue";
// import HelloWorld from "../components/HelloWorld.vue";
</script>

<style scoped>

</style>
