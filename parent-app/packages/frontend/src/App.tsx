import { useEffect, useRef, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [switchToNextTab, setSwitchToNextTab] = useState(false);
  const donutIframeRef = useRef();
  const lineIframeRef = useRef();

  const changeTabs = () => {
    setSwitchToNextTab((v) => !v);
  };

  const sendData = () => {
    let iframe = donutIframeRef.current;
    let message = {
      type: "child-container-message",
      payLoad: {
        chartData: JSON.stringify({
          options: {},
          series: [44, 55],
          labels: ["A", "B"],
        }),
      },
    };

    // false means its a line chart
    if (!switchToNextTab) {
      iframe = lineIframeRef.current;
      message = {
        type: "child-container-message",
        payLoad: {
          chartData: JSON.stringify({
            options: {
              chart: {
                id: "basic-bar",
              },
              xaxis: {
                categories: [1991, 1992],
              },
            },
            series: [
              {
                name: "series-1",
                data: [30, 40],
              },
            ],
          }),
        },
      };
    }

    iframe.contentWindow.postMessage(message, "*");
  };

  return (
    <>
      <header>
        <p>This is Parent APP</p>
      </header>
      <main>
        {switchToNextTab && (
          <iframe
            ref={donutIframeRef}
            className="child-iframe-app"
            src={`${import.meta.env.VITE_CHILD_IFRAME_URL}/donut`}
          ></iframe>
        )}
        {!switchToNextTab && (
          <iframe
            ref={lineIframeRef}
            className="child-iframe-app"
            src={`${import.meta.env.VITE_CHILD_IFRAME_URL}/line`}
          ></iframe>
        )}
        <section className="nav-buttons">
          <button onClick={changeTabs}>next</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={sendData}>send</button>
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
