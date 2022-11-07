import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { User } from "../../types/user";

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
                    credits: 0
                },
                headers: { Authorization: `Bearer ${authToken}` },
            })
            .json();
        return res as any;
    } catch (error) {}
};

export { getUserByEmail, createUser };
