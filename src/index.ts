import type { Connection, WSMessage } from "agents";
import { Agent } from "agents";
import { Hono } from "hono";
import { agentsMiddleware } from "hono-agents";

const app = new Hono<{ Bindings: Env }>();

export class MichiruAgent extends Agent<Env> {
  onMessage(connection: Connection, message: WSMessage): void | Promise<void> {
    console.log(message);
    connection.send(message);
  }
}

app.use("*", agentsMiddleware());

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.get("/api/hello", (c) => {
  const name = c.env.NODE_ENV;
  return c.json({ message: `Hello, ${name}!` });
});

export default app;
