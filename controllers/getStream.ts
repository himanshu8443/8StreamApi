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
