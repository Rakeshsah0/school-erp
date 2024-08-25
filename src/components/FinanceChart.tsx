"use client";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 40000,
    expense: 24000,
  },
  {
    name: 'Feb',
    income: 30000,
    expense: 13980,
  },
  {
    name: 'Mar',
    income: 20000,
    expense: 25000,
  },
  {
    name: 'Apr',
    income: 27800,
    expense: 17080,
  },
  {
    name: 'May',
    income: 89000,
    expense: 48000,
  },
  {
    name: 'Jun',
    income: 50000,
    expense: 38000,
  },
  {
    name: 'Jul',
    income: 34900,
    expense: 43000,
  },
  {
    name: 'Aug',
    income: 39000,
    expense: 50000,
  },
  {
    name: 'Sep',
    income: 64900,
    expense: 43000,
  },
  {
    name: 'Oct',
    income: 49000,
    expense: 42000,
  },
  {
    name: 'Nov',
    income: 90000,
    expense: 70000,
  },
  {
    name: 'Dec',
    income: 100000,
    expense: 80000,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white h-full p-4 rounded-lg">
      {/* Title  */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
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
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#FAE27E" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
