import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [switchToNextTab, setSwitchToNextTab] = useState(false);

  const changeTabs = () => {
    setSwitchToNextTab((v) => !v);
  };

  return (
    <>
      <header>
        <p>This is Parent APP</p>
      </header>
      <main>
        {switchToNextTab && (
          <iframe
            className="child-iframe-app"
            src={`${import.meta.env.VITE_CHILD_IFRAME_URL}/users/vipul`}
          ></iframe>
        )}
        {!switchToNextTab && (
          <iframe
            className="child-iframe-app"
            src={import.meta.env.VITE_CHILD_IFRAME_URL}
          ></iframe>
        )}
        <section className="nav-buttons">
          <button onClick={changeTabs}>next</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={changeTabs}>prev</button>
        </section>
      </main>
      <footer>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  );
}

export default App;
