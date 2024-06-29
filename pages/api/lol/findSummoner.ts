import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            let reqData: { gameName: string; gameTag: string } = JSON.parse(req.body);
            let riotUrl = "riot/account/v1/accounts/by-riot-id";
            let result = false;
            await fetch(`${process.env.NEXT_RIOT_API_URL}/${riotUrl}/${reqData.gameName}/${reqData.gameTag}?${process.env.NEXT_RIOT_API_KEY}`)
                .then((r) => r.json())
                .then((resData) => {
                    if (resData.puuid) {
                        result = true;
                    }
                });
            return res.status(200).json(result);
        } else {
            return res.status(200).json(false);
        }
    } catch (error) {
        return res.status(200).json(false);
    }
}
