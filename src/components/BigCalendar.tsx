"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { EventProps } from "react-big-calendar";


const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  const EventComponent = ({ event }: EventProps) => (
    <span className="flex items-center justify-center"><h1 className="text-xs">{event.title}</h1></span>
  );

  return (
    <div className="h-[450px] md:h-[80vh]">
<Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["day","work_week"]}
      view={view}
      style={{ height: "98%"}}
      onView={handleOnChangeView}
      min={new Date(2024, 8, 27, 8, 0, 0)}
      max={new Date(2024, 8, 27, 17, 0, 0)}
      components={{
        event: EventComponent
      }}
    />
    </div>
    
  );
};

export default BigCalendar;