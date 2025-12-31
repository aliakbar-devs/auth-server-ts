import express, { Application } from "express";
import { registerRoutes } from "./routes";

export function createApp(): Application {
  const app = express();

  app.use(express.json());

  registerRoutes(app);

  return app;
}