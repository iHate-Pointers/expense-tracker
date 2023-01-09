import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value) //Transform a data to array  
    const totalMaximum = Math.max(...dataPointValue); //With ... it will recieve 12 values
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
