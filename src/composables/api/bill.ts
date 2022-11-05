import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { Bill } from "../../types/bill";

const apiURL = import.meta.env.VITE_API_URL;

const getBillsByUserIDAndDays = async (userId: string, days: number) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky(
            `${apiURL}/api/bills/getPastBills/${userId}/${days}`,
            {
                headers: { Authorization: `Bearer ${authToken}` },
            },
        ).json();
        return res as Bill[];
    } catch (error) {
        console.log(error);
    }
};

export { getBillsByUserIDAndDays };
