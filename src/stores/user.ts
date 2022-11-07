import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { User } from "../types/user";

export const useUserStore = defineStore("user", () => {
    const user = ref<User>();

    const setUser = (userDetails: User) => {
        user.value = userDetails;
    };

    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
        const user = JSON.parse(userInStorage) as User;
        setUser(user);
    }

    watch(
        () => user,
        (state) => {
            localStorage.setItem("user", JSON.stringify(state.value));
        },
        { deep: true },
    );

    return { user, setUser };
});
