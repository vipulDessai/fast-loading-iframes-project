import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import "./App.css";

const defaultLineChartData = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

function App() {
  const [chartData, setChartData] = useState(defaultLineChartData);

  const retreiveSmartviewTabSavedData = (e: any) => {
    if (e.data && e.data.type === "child-container-message") {
      const latestData = JSON.parse(e.data.payLoad.chartData);
      setChartData(latestData);
    }
  };

  useEffect(() => {
    window.addEventListener("message", retreiveSmartviewTabSavedData);
  }, []);

  const onClick = () => {
    window.parent.postMessage(
      {
        type: "parent-container-message",
        action: "redirect",
        data: {
          chart: "data from child iframe 1",
        },
      },
      "*",
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Line Graph</p>
        <section className="chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="500"
          />
        </section>
      </header>
    </div>
  );
}

export default App;
