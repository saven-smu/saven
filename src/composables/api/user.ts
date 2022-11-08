import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { User } from "../../types/user";
import { addToastToQueue } from "../ToastHandler";

const apiURL = import.meta.env.VITE_API_URL;

const getUserByEmail = async (email: string) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky(`${apiURL}/api/users/verifyUser/${email}`, {
            headers: { Authorization: `Bearer ${authToken}` },
        }).json();
        return res as User;
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (
    name: string,
    email: string,
    address: string,
    housingType: string,
    householdMembers: number,
) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky
            .post(`${apiURL}/api/users`, {
                json: {
                    name,
                    email,
                    address,
                    housingType,
                    householdMembers,
                    credits: 0,
                },
                headers: { Authorization: `Bearer ${authToken}` },
            })
            .json();
        addToastToQueue("success", "Created user!");
        return res as any;
    } catch (error) {
        addToastToQueue("error", "Error creating user");
    }
};

const getUserById = async (id: string) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky(`${apiURL}/api/users/${id}`, {
            headers: { Authorization: `Bearer ${authToken}` },
        }).json();
        return res as User;
    } catch (error) {
        addToastToQueue("error", "Error getting user by ID");
    }
};

const updateUserById = async (
    id: string,
    name: string,
    email: string,
    address: string,
    housingType: string,
    householdMembers: number,
    credits: number,
) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky
            .put(`${apiURL}/api/users/${id}`, {
                json: {
                    name,
                    email,
                    address,
                    housingType,
                    householdMembers,
                    credits,
                },
                headers: { Authorization: `Bearer ${authToken}` },
            })
            .json();
        addToastToQueue("success", "Updated user!");
        return res as any;
    } catch (error) {
        addToastToQueue("error", "Error updating user");
    }
};

export { getUserByEmail, createUser, getUserById, updateUserById };
