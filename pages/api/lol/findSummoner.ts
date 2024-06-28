import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        return res.status(200).json("ok");
    } else {
        return res.status(200).json("error");
    }
}
