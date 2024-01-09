import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/route";
import rateLimit from "express-rate-limit";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
dotenv.config();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 10, // 100 requests per window
  message: "Too many requests, please try again later.",
});
if (process.env.RATE_LIMIT === "true") {
  app.use(limiter);
}
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("its ok");
});

const Port = process.env.PORT || 5001;
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
