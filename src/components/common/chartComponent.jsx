import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ChartComponent = () => {
  const data = [
    { name: "Day 1", humidity: 400, temperature: 2400, light: 2400 },
    { name: "Day 2", humidity: 800, temperature: 200, light: 2000 },
    { name: "Day 3", humidity: 600, temperature: 2010, light: 200 },
    { name: "Day 4", humidity: 800, temperature: 200, light: 2000 },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "4rem 0 2rem 0",
      }}
    >
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
        <Line type="monotone" dataKey="temperature" stroke="red" />
        <Line type="monotone" dataKey="light" stroke="green" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
