// https://www.geeksforgeeks.org/how-to-import-recharts-js-library-to-reactjs-file/?ref=rp
// npm install recharts

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
  
const data = [
  {
    name: "Block A",
    l1: 4000,
    l2: 2400,
    amt: 2400,
  },
  {
    name: "Block B",
    l1: 3000,
    l2: 1398,
    amt: 2210,
  },
  {
    name: "Block C",
    l1: 2000,
    l2: 9800,
    amt: 2290,
  },
  {
    name: "Block D",
    l1: 2780,
    l2: 3908,
    amt: 2000,
  },
];
  
export default function Recharts() {
  return (
    <div>
      <h4>How to import recharts.js library to ReactJS file ?</h4>
      <div style={{ width: "700px", 
                    height: "350px",
                    backgroundColor: "black",
                    margin: "auto",
                    marginBottom: 100 }}>
        <ResponsiveContainer width="100%" 
                            height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="l2"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" 
                  dataKey="l1" 
                  stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}