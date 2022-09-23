import React from "react";
import { recentOrders } from "../../dummyData/mock";

const RecentOrders = () => {
  return (
    <div className="w-full flex flex-col items-start justify-between p-2">
      <label className="text-xl font-semibold">Recent Orders</label>
      {recentOrders &&
        recentOrders.length &&
        recentOrders.map((item, index) => (
          <div
            key={index}
            className="w-full my-4 flex gap-3 items-center justify-between"
          >
            <div className="flex-[3] flex gap-4 items-center">
              <img
                src={item.img}
                alt={item.title}
                className="h-[40px] w-[40px] rounded-md"
              />
              <div className="flex gap-2 flex-col items-start">
                <label className="text-xl text-slate-500  dark:text-slate-100">
                  {item.title}
                </label>
                <label>{item.date}</label>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-center">
              <label className="font-bold text-slate-600 dark:text-slate-200">
                {item.amount}
              </label>
              <label className="font-bold text-slate-400">$</label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecentOrders;
