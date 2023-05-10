import { useState } from "react";
import logo from "./logo.svg";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          <button
            type="button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>Home.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a href={`/programs`}>Programs</a>
        </p>
      </header>
    </div>
  );
}

export default Home;
