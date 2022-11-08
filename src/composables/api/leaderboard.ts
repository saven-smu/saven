import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { Leaderboard } from "../../types/leaderboard";

const apiURL = import.meta.env.VITE_API_URL;

const getLeaderboard = async (timeWindow: number, utilityType: number) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky(
            `${apiURL}/api/leaderboards/getLeaderboards/${utilityType}/${timeWindow}`,
            {
                headers: { Authorization: `Bearer ${authToken}` },
            },
        ).json();
        return res as Leaderboard[];
    } catch (error) {
        return [];
    }
};
export { getLeaderboard };
