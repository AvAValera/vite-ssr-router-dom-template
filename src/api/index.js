import express from "express";

const router = express.Router();

router.use("/test", (req, res) => res.json({message: "Hello Vite SSR"}))

export default router;