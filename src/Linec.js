import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import "./Linec.css";

const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ],
  datasets: [
    {
      label: "Summer",
      backgroundColor: "rgba(75,192,192,1)",

      borderWidth: 2,
      fill: false,
      borderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "white",
      tension: 0.4,
      data: [65, 59, 80, 81, 56, 50, 60, 62, 75],
    },
    {
      label: "Holidays",

      borderWidth: 2,
      fill: false,
      //   boderJoinstyle: "round",
      borderColor: "#D1D1D1",
      pointBackgroundColor: "white",
      tension: 0.4,
      data: [62, 66, 70, 76, 79, 75, 74, 70, 60],
    },
    {
      label: "WeekEnd",

      borderWidth: 2,
      fill: false,
      //   boderJoinstyle: "round",
      borderColor: "#0F0E0E",
      pointBackgroundColor: "white",
      tension: 0.4,
      data: [50, 55, 57, 60, 70, 60, 65, 70, 65],
    },
  ],
};
function Linec() {
  return (
    <div data-aos="zoom-in" className="chart">
      <Line
        data={state}
        options={{
          scales: {
            x: {
              grid: {
                drawBorder: false,
                display: false,
              },
            },
            y: {
              grid: {
                drawBorder: false,
                display: false,
              },
            },
          },

          plugins: {
            legend: false, // Hide legend
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}

export default Linec;
