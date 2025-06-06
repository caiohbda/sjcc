import express from "express";
import cors from "cors";
import commentRoutes from "./infra/http/CommentController";
import { authMiddleware } from "../src/infra/middleware/authMiddleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authMiddleware, commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});