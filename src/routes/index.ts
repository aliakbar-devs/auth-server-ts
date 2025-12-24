import { Express } from "express";
import fs from "fs";
import path from "path";

export default async function loadRoutes(app: Express) {
  const routesPath = __dirname;

  const files = fs.readdirSync(routesPath);

  for (const file of files) {
    if (!file.match(/\.routes\.(ts|js)$/)) continue;

    const routeName = file.replace(/\.routes\.(ts|js)$/, "");

    const routeModule = await import(path.join(routesPath, file));
    const route = routeModule.default;

    if (!route) {
      throw new Error(`Route ${file} must export default router`);
    }

    app.use(`/${routeName}`, route);
    console.log(`Route loaded: /${routeName}`);
  }
}