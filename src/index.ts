import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.get("/api/hello", (c) => {
  const name = c.env.NODE_ENV;
  return c.json({ message: `Hello, ${name}!` });
});

export default app;
