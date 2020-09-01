import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class ScatterPlot extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <ScatterChart>
            <CartesianGrid />
            <XAxis
              stroke="#58FF33"
              dataKey={"Net Asset Value Change%"}
              type="number"
              name="Net Asset Value Chage %"
              unit="%"
            />
            <YAxis
              stroke="#58FF33"
              dataKey={"ETF Change Price %"}
              type="number"
              name="ETF Change Price %"
              unit="%"
            />
            <Scatter name="A school" data={data} fill="#3336FF" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ScatterPlot;
