"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count:1690,
        fill: "white",
      },
  {
    name: "Girls",
    count: 456,
    fill: "#FAE27E",
  },
  {
    name: "Boys",
    count: 1234,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white w-full h-full p-4 rounded-xl">
      {/* Title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      {/* chart  */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" height={50} width={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* buttom  */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="rounded-full bg-rkSky w-5 h-5" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-500">Boys(67%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="rounded-full bg-rkYellow w-5 h-5" />
          <h1 className="font-bold">678</h1>
          <h2 className="text-xs text-gray-500">Girls(33%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
