import ky, { HTTPError } from "ky";
import auth from "../../auth";
import { Leaderboard } from "../../types/leaderboard";

// const apiURL = import.meta.env.VITE_API_URL;

// const getLeaderboard = async () => {
//     try {
//         const res = await ky(`${apiURL}/api/userLeaderboards`, {
//             headers: { Authorization: `Bearer ${authToken}` },
//         }).json();
//       return res as any;
//     } catch (error) {
//         console.log(error);
//     }
// };

const getLeaderboard = async (userId: string, days: number) => {
    try {
        const authToken = await auth.getAccessTokenSilently();
        const res = await ky
            .get(
                "http://saven-lb-1696971161.ap-southeast-1.elb.amazonaws.com/api/userLeaderboards/", {
                    headers: { Authorization: `Bearer ${authToken}` }
                }
            )
            .json() as Leaderboard[];

            for (const leaderboard of res) {
                var currDay = new Date();
                var today = String(currDay.getDate())
                if (!(leaderboard.storedDateTime === today)) {
                    leaderboard.display = 'none';
                }
            }

            // const formatter = new Intl.DateTimeFormat("en-SG");
            // const date = formatter.format(new Date(leaderboard.storedDateTime));

        // return res as Leaderboard[];
    } catch (error) {
        console.log(error);
    }

};

function getStartOfWeek(date) {
    const dt = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const offset = dt.getDate() - (dt.getDay() === 0 ? 6: dt.getDay() - 1);
    return new Date(dt.setDate(offset));
}

function getStartOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

export { getLeaderboard };
