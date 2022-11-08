import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { Leaderboard } from "../../types/leaderboard";

const apiURL = import.meta.env.VITE_API_URL;

const getLeaderboard = async () => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky(`${apiURL}/api/leaderboards`, {
            headers: { Authorization: `Bearer ${authToken}` },
        }).json();
      return res as Leaderboard[];
    } catch (error) {
        console.log(error);
    }
};

export { getLeaderboard };
