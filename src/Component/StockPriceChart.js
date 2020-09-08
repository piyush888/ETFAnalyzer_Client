import React from "react";

import CandleStickChartWithMACDIndicator from "./StockCharts/CandleStickChartWithMACDIndicator";

const ChartComponent = ({ data }) => {
  if (data) {
    return <CandleStickChartWithMACDIndicator data={data} />;
  } else {
    return <></>;
  }
};

export default ChartComponent;
