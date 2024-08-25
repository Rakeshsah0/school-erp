"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  
  {
    name: "Mon",
    present: 70,
    absent: 40,
  },
  {
    name: "Tue",
    present: 90,
    absent: 20,
  },
  {
    name: "Wed",
    present: 60,
    absent: 50,
  },
  {
    name: "Thu",
    present: 85,
    absent: 25,
  },
  {
    name: "Fri",
    present: 50,
    absent: 60,
  },
  {
    name: "Sat",
    present: 40,
    absent: 70,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white h-full p-4 rounded-lg">
      {/* Title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      {/* Graph  */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar dataKey="present" fill="#C3EBFA"  legendType="circle" radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#FAE27E"  legendType="circle"  radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
