import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { userLeaderboard } from "../../types/userleaderboard";

const apiURL = import.meta.env.VITE_API_URL;

const getUserLeaderboard = async () => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky(`${apiURL}/api/userLeaderboards`, {
            headers: { Authorization: `Bearer ${authToken}` },
        }).json();
      return res as userLeaderboard[];
    } catch (error) {
        console.log(error);
    }
};

export { getUserLeaderboard };