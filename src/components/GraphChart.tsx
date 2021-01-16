import React from "react";
import { Bar } from "react-chartjs-2";

import { StoreContext } from "../StoreContext";
import { useObserver } from "mobx-react";

function GraphChart() {
  const store = React.useContext(StoreContext);

 const data = {
    labels: store.topCommonKeys.value,
    datasets: [
        {
            label:['Most common letters appearences in dictionary'],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56",'yellow','gray'],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","yellow",'grey'],
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: store?.graphChartData.value
          },
    ],
  };

  return useObserver(
    () =>
      store.graphChart && (
          <Bar
            data={data}
            options={{ maintainAspectRatio: false }}
          />
      )
  )
}

export default GraphChart;
