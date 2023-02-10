import "dotenv/config";
import express from "express";
import { NextFunction, Request, Response } from "express-serve-static-core";
import notesRoutes from "./routes/notes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMesage = "An unknown error occurred";
  if (error instanceof Error) errorMesage = error.message;
  res.status(500).json({ error: errorMesage });
});

export default app;
