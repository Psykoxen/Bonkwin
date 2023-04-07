import express from "express";
import user from "./routes/user";
import ad from "./routes/ad";
const router = express.Router();
router.use("/user", user);
router.use("/ad", ad);
export default router;
