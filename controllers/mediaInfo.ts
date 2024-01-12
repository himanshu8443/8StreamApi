import { Request, Response } from "express";
import getInfo from "../lib/getInfo";

export default async function mediaInfo(req: Request, res: Response) {
  const { id } = req.query;
  if (!id) {
    return res.json({
      success: false,
      message: "Please provide a valid id",
    });
  }
  try {
    const data = await getInfo(id as string);
    res.json(data);
  } catch (err) {
    console.log("error: ", err);
    res.json({
      success: false,
      message: "Internal server error",
    });
  }
}
