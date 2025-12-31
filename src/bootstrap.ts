import { createApp } from "./app";

export function bootstrap() {
  const app = createApp();
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
} 