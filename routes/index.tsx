/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh. You should see the message change. Hello, Tigran.
      </p>
      <Counter start={3} />
    </div>
  );
}
