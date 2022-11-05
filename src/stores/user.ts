import { defineStore } from "pinia";
import { ref } from "vue";
import { User } from "../types/user";

export const useUserStore = defineStore("user", () => {
    const user = ref<User>();

    const setUser = (userDetails: User) => {
        user.value = userDetails;
    };

    return { setUser };
});
