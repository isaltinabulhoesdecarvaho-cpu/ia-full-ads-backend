
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import metaRoutes from "./src/routes/metaRoutes.js";
import aiRoutes from "./src/routes/aiRoutes.js";
import creativeRoutes from "./src/routes/creativeRoutes.js";
import logsRoutes from "./src/routes/logsRoutes.js";

import { startWorker } from "./src/workers/iaWorker.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok", backend: "IA Full Ads Backend Online" });
});

app.use("/auth/meta", metaRoutes);
app.use("/meta", metaRoutes);
app.use("/ai", aiRoutes);
app.use("/creatives", creativeRoutes);
app.use("/logs", logsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));

startWorker();
