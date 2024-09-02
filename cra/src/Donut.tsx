import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import "./App.css";

const defaultDonutChartData = {
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

function App() {
  const [chartData, setChartData] = useState(defaultDonutChartData);

  const retreiveSmartviewTabSavedData = (e: any) => {
    if (e.data && e.data.type === "child-container-message") {
      const latestData = JSON.parse(e.data.payLoad.chartData);
      setChartData(latestData);
    }
  };

  useEffect(() => {
    window.addEventListener("message", retreiveSmartviewTabSavedData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Donut Graph</p>
        <section className="chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="500"
          />
        </section>
      </header>
    </div>
  );
}

export default App;
