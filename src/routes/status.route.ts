import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    version: "0.0.1",
  });
});

router.get("/status", (req, res) => {
  res.status(200).json({
    status: "ok",
    statusCode: 200,
    serverStatus: "up & running...",
    apiVersion: "0.0.1",
  });
});

export default router;
