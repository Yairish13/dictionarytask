import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { StoreContext } from "../StoreContext";
import { useObserver } from "mobx-react";


function PieChart() {
  const store = React.useContext(StoreContext);
 const data = {
    labels: ["Words that starting ", "Words that ending", "Words that have double appearences"],
    datasets: [
      {
        data:store.pieChartData.value,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return useObserver(
    () =>
      store.pieChart && (
          <Doughnut
            data={data}
            options={{ maintainAspectRatio: false }}
          />
      )
  )
}

export default PieChart;
