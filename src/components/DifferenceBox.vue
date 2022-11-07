<template>
    <div
        class="card h-44 flex justify-center w-[12%] p-2 text-white"
        :class="getBackgroundClass()"
    >
        <p class="text-center text-5xl font-bold">
            {{ Math.abs(Math.round(props.percentageVal * 100)) }}%
        </p>

        <p class="text-md font-bold">
            {{ getCommentText() }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    percentageVal: number;
    title: string;
    isCost?: boolean;
}>();

const getBackgroundClass = () =>
    Math.round(props.percentageVal * 100) < 0 ? "bg-error" : "bg-success";

const getCommentText = () => {
    if (Math.round(props.percentageVal * 100) < 0) {
        return `Increased ${props.title} ${props.isCost ? "cost" : "usage"}`;
    } else {
        return `Reduced ${props.title} ${props.isCost ? "cost" : "usage"}`;
    }
};
</script>

<style scoped></style>
