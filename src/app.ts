import express from "express";
import loadRoutes from "./routes";

const app = express();
app.use(express.json());
loadRoutes(app)


export default app;