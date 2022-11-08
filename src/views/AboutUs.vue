<template>
    <div class="bg-gradient-to-b from-primary to-[#FFFFF9] flex flex-col">
        <div class="drop-shadow-lg pt-5 px-20" ref="carouselRef">
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="../assets/gang.jpg" width="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="../assets/him.jpg" class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="../assets/feet.jpg" class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">MEET THE TEAM</a>
                <a href="#item2" class="btn btn-xs">not important</a>
                <a href="#item3" class="btn btn-xs">not important</a>
            </div>
        </div>

        <div class="text-center pt-20" ref="textRef">
            <h1 class="text-5xl font-bold">WHERE IT BEGAN</h1>
            <div class="flex flex-row">
                <p class="text-left pt-10 pb-20 mx-auto mb-5 max-w-lg">With climate change becoming an increasingly
                    prevalent
                    issue, our small, tight knit team turned our attention towards efforts to conserve the
                    environmental. Thus, Saven was started because of our wish to address the increasing problem of
                    energy wastage in Singapore. <br /><br />

                    Through Saven, users like you are able to better adjust their utility usage habits and in turn,
                    help
                    conserve the limited resources that Singapore possesses. <br /><br />

                    We want to continue advocating and raising awareness about the importance of energy
                    conservation,
                    and helping you to manage your utility bills is only our first step.</p>
                <div class="">
                    <img src="../assets/saven_family.png" width="400" />
                </div>
            </div>
        </div>

        <div class="" ref="teamRef">
            <h1 class="text-center text-5xl font-bold pt-10">MEET THE TEAM</h1>
            <div class="pb-20">
                <div class="py-15 px-15 flex flex-row justify-center items-center">
                    <div class="py-10 px-10">
                        <div class="card w-96 bg-white py-5 px-5 shadow-xl rounded">
                            <figure><img src="../assets/syong.jpg" width="300" ref="imgRef" /></figure>
                            <div class="card-body">
                                <h2 class="text-2xl text-center"><b>Fan Syong Yue</b></h2>
                                <p class="text-center"><i>Frontend Carry</i></p>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-white py-5 px-5 shadow-xl rounded">
                        <figure><img src="../assets/jeff.jpg" width="300" ref="imgRef" /></figure>
                        <div class="card-body">
                            <h2 class="text-2xl text-center"><b>Jeffery Lau</b></h2>
                            <p class="text-center"><i>Backend Carry</i></p>
                        </div>
                    </div>
                </div>

                <div class="py-15 flex flex-row justify-center items-center">
                    <div class="px-10 ">
                        <div class="card w-96 bg-white py-5 px-5 shadow-xl rounded">
                            <figure><img src="../assets/josh.jpg" width="300" ref="imgRef" /></figure>
                            <div class="card-body">
                                <h2 class="text-2xl text-center"><b>Joshua Chia</b></h2>
                                <p class="text-center"><i>Doing his best</i></p>
                            </div>
                        </div>
                    </div>

                    <div class="px-10">
                        <div class="card w-96 bg-white py-5 px-5 shadow-xl rounded">
                            <figure><img src="../assets/kai.jpg" width="300" ref="imgRef" /></figure>
                            <div class="card-body">
                                <h2 class="text-2xl text-center"><b>Hei Yee Kai</b></h2>
                                <p class="text-center"><i>same bro</i></p>
                            </div>
                        </div>
                    </div>

                    <div class="px-10">
                        <div class="card w-96 bg-white py-5 px-5 shadow-xl rounded">
                            <figure><img src="../assets/jenna.jpg" width="300" ref="imgRef" /></figure>
                            <div class="card-body">
                                <h2 class="text-2xl text-center"><b>Jenna Cheo</b></h2>
                                <p class="text-center"><i>Never touching uiux again</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const carouselRef = ref();
const textRef = ref();
const teamRef = ref();

useMotion(carouselRef, {
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
            delay: 300,
        },
    },
});

useMotion(textRef, {
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
            delay: 500,
        },
    },
});

useMotion(teamRef, {
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
            delay: 700,
        },
    },
});
</script>

<style scoped>

</style>