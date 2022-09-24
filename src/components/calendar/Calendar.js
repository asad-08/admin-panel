import React from "react";
import EventCalendar from "./EventCalendar";

const Calendar = () => {
  return (
    <div className="p-8 min-h-[80vh] w-full bg-skin-base rounded-lg flex flex-col gap-4 items-start justify-start dark:bg-slate-600">
      {/* <label className="text-xl font-semibold dark:text-slate-200">
        Calendar
      </label> */}
      <div className="w-full mt-[-50px] ">
        <EventCalendar />
      </div>
    </div>
  );
};

export default Calendar;
