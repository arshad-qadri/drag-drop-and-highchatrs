import React from "react";
// import ReactHighcharts from "react-highcharts";
// import HighCharts from "./HighCharts";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const HighChart = () => {
  const pdata = [
    {
      name: "python",
      student: 13,
      fees: 10,
      scope: 11,
    },
    {
      name: "javascript",
      student: 10,
      fees: 12,
      scope: 10,
    },
    {
      name: "php",
      student: 15,
      fees: 4,
      scope: 8,
    },
    {
      name: "java",
      student: 6,
      fees: 9,
      scope: 4,
    },
    {
      name: "html",
      student: 8,
      fees: 5,
      scope: 6,
    },
    {
      name: "css",
      student: 7,
      fees: 5,
      scope: 8,
    },
  ];
  // //HighCharts settings, type and data
  // const config = {
  //   chart: {
  //     type: "line",
  //   },
  //   title: {
  //     text: "My chart",
  //   },
  //   series: [
  //     {
  //       data: [1, 2, 1, 4, 3],
  //     },
  //   ],
  // };
  return (
    <div className="p-8">
      <h1 className="text-center my-4 underline font-bold">Line Chart</h1>
      {/* <ReactHighcharts config={config}></ReactHighcharts> */}
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={" preserveStartEnd"} />
          <YAxis />
          <Legend />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="student"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="scope"
            stroke="yellow"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <h1 className="text-center my-4 underline font-bold">Bar Chart</h1>
      <BarChart data={pdata} width={1280} height={500}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={" preserveStartEnd"} />
        <YAxis />
        <Legend />
        <Tooltip />
        <Bar dataKey="student" fill="#8884d8" />
        <Bar dataKey="fees" fill="#82ca9d" />
        {/* <Bar dataKey="scope" fill="#82caf5" /> */}
      </BarChart>
    </div>
  );
};

export default HighChart;
