"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
    {
      id: 1,
      title: "Science Exhivition",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Quiz",
      time: "4:00 PM - 6:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Cricket Selection",
      time: "1:00 PM - 4:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
      }
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar value={value} onChange={onChange}/>
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src="/moreDark.png" alt="" height={20} width={20} />
        </div>
        <div className="flex flex-col gap-2">
            {events.map((event)=>(
                <div key={event.id} className='p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-rkSky even:border-t-rkPurple'>
                    <div className="flex items-center justify-between ">
                        <h1 className='font-semibold text-gray-600'>{truncateText(event.title, 15)}</h1>
                        <span className='text-gray-300 text-xs'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{truncateText(event.description, 40)}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar