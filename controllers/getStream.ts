import axios from "axios";
import { Request, Response } from "express";

export default async function getStream(req: Request, res: Response) {
  const { file, key } = req.body;
  if (!file || !key) {
    return res.json({
      success: false,
      message: "Please provide a valid id",
    });
  }
  const f = file as string;
  const path = f.slice(1) + ".txt";
  try {
    const link = await axios.get(`${process.env.BASE_URL}/playlist/${path}`, {
      headers: {
        "X-Csrf-Token": key,
        Referer: `https://allmovieland.fun/`,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        Origin: process.env.BASE_URL,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
      },
    });
    res.json({
      success: true,
      data: {
        link: link.data,
      },
    });
  } catch (err) {
    console.log("error: ", err);
    res.json({
      success: false,
      message: "No media found",
    });
  }
}
