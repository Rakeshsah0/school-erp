"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { EventProps } from "react-big-calendar";

// Custom Event Component
const CustomEvent = ({ event }: EventProps) => {
  const startTime = moment(event.start).format("HH:mm");
  const endTime = moment(event.end).format("HH:mm");

  return (
    <div style={{ padding: "2px", backgroundColor: "red", borderRadius: "4px" }}>
      <div style={{ fontSize: "12px", fontWeight: "bold" }}>
        {startTime} - {endTime}
      </div>
      <div style={{ fontSize: "14px" }}>{event.title}</div>
    </div>
  );
};

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%"}}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      components={{
        event:CustomEvent
      }}
    />
  );
};

export default BigCalendar;