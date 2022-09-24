import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

function EventCalendar() {
  const dispatch = useDispatch();
  const calendarRef = useRef();

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;
    // dispatch(openNewEventDialog(selectInfo));
  };

  const handleEventDrop = (eventDropInfo) => {
    const { id, title, allDay, start, end, extendedProps } =
      eventDropInfo.event;
  };
  const handleEventClickClose = () => {
    // dispatch(openEditEventDialog(clickInfo));
  };

  function renderEventContent(eventInfo) {
    return null;
  }

  const handleDates = (rangeInfo) => {};

  const handleEventAdd = (addInfo) => {};

  const handleCloseModal = () => {};
  const handleEventChange = (changeInfo) => {};

  const handleEventRemove = (removeInfo) => {};

  function clearClickedEvent() {}
  return (
    <div className="mt-[60px] p-4 w-full dark:text-slate-100">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable
        selectable
        selectMirror
        dayMaxEvents
        weekends
        datesSet={handleDates}
        select={handleDateSelect}
        events={[]}
        // eventContent={renderEventContent}
        eventClick={function (arg) {}}
        eventColor="#9333EA"
        dateClick={(arg) => {}}
        // eventAdd={handleEventAdd}
        // eventChange={handleEventChange}
        // eventRemove={handleEventRemove}
        // eventDrop={handleEventDrop}
        initialDate={new Date()}
        ref={calendarRef}
      />
    </div>
  );
}

export default EventCalendar;
