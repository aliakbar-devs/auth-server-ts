import { Application } from "express";
import authRoutes from "./auth.routes";
import { RouteConfig } from "../entities/User";

const routes: RouteConfig[] = [
  {
    path: "/auth",
    router: authRoutes,
  },
];

export function registerRoutes(app: Application) {
  for (const route of routes) {
    app.use(route.path, route.router);
  }
}