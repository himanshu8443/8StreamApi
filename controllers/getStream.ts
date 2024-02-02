import axios from "axios";
import { Request, Response } from "express";
import { getPlayerUrl } from "../lib/getPlayerUrl";

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
    const playerUrl = await getPlayerUrl();
    const link = await axios.get(`${playerUrl}/playlist/${path}`, {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Content-Length": "0",
        "Content-Type": "application/x-www-form-urlencoded",
        Dnt: "1",
        Origin: "https://friness-cherlormur-i-275.site",
        Pragma: "no-cache",
        "Sec-Ch-Ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
        "X-Csrf-Token": key,
        Referer: `https://google.com/`,
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
