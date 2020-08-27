import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartForHistArb = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      {data.length ? (
        <ResponsiveContainer
          width="100%"
          height={280}
          padding={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <LineChart data={data}>
            <XAxis className="recharts-cartesian-axis-tick" dataKey="Time" />
            <YAxis className="recharts-cartesian-axis-tick" />
            <Tooltip />
            <Legend />
            <Brush dataKey="Time" height={30} stroke="#8884d8" />
            <Line
              type="monotone"
              dataKey="Arbitrage in $"
              stroke="#8884d8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default LineChartForHistArb;
