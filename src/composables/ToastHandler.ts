import { ref, Ref } from "vue";
import { v4 } from "uuid";

interface ToastItem {
    id: string;
    type: "info" | "success" | "warning" | "error";
    msg: string;
}

const toastQueue: Ref<ToastItem[]> = ref([]);

const addToastToQueue = (
    type: "info" | "success" | "warning" | "error",
    msg: string,
) => {
    const toastID = v4();
    toastQueue.value.push({ id: toastID, type, msg });
    setInterval(() => {
        const toastIdx = toastQueue.value.findIndex(
            (queueToastItem) => queueToastItem.id === toastID,
        );
        toastQueue.value.splice(toastIdx, 1);
    }, 3000);
};

export { toastQueue, addToastToQueue };
