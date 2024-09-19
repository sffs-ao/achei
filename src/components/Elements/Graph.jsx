import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Janeiro", value: 400 },
  { name: "Fevereiro", value: 300 },
  { name: "Março", value: 200 },
  { name: "Abril", value: 278 },
  { name: "Maio", value: 189 },
];

const MyStyledLineChart = () => (
  <LineChart width={1200} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
    <XAxis dataKey="name" stroke="#555" tick={{ fill: "#555", fontSize: 14 }} />
    <YAxis stroke="#555" tick={{ fill: "#555", fontSize: 14 }} />
    <Tooltip content={<CustomTooltip />} />
    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
  </LineChart>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p>{`Valor: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default MyStyledLineChart;
