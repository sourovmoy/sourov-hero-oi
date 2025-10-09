import React from "react";

import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  return (
    <div style={{ width: "100%", height: 211 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          accessibilityLayer
          layout="vertical"
          barCategoryGap="10%"
          barGap={10}
          data={ratings}
          margin={{
            top: 10,
            right: 20,
            bottom: 10,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            type="number"
            tickFormatter={(num) => (num / 10000).toFixed(0)}
          />
          <YAxis dataKey="name" type="category" />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat().format(value) + " ratings"
            }
          />
          <Bar dataKey="count" fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
