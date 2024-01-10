import express from "express";
import mediaInfo from "../controllers/mediaInfo";
import getStream from "../controllers/getStream";
import { createProxyMiddleware } from "http-proxy-middleware";

const router = express.Router();

router.get("/mediaInfo", mediaInfo);
router.post("/getStream", getStream);

export default router;
