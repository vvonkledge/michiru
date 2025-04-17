import { useAgent } from "agents/react";

const App = () => {
  const agent = useAgent({
    agent: "michiru-agent",
    name: "test",

    onMessage: (message) => {
      console.log(message);
    },
  });

  const handleClick = () => {
    agent.send("Hello, world!");
  };

  return (
    <>
      <h1>Vite + React + Hono + Cloudflare</h1>
      <button onClick={handleClick} type="button">
        Click me
      </button>
    </>
  );
};

export default App;
