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
console.log(data)
    return (
<<<<<<< HEAD
      <div style={{ width: "90%", height: 240 }}>
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
=======
      <ScatterChart width={width || 400} height={height || 240}>
        <CartesianGrid strokeDasharray="3 3" />
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
>>>>>>> 66f472f1808e768b30225ddde7a9c2595cd21b4f
    );
  }
}

export default ScatterPlot;
