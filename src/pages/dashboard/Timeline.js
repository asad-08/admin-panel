import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-semibold text-2xl pb-4">Last Order Status</label>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1hr Ago
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ordered
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-skin-btnText bg-skin-btn rounded-lg hover:bg-skin-base hover:text-skin-base focus:z-10 "
          >
            View
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            30min Ago
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Payment Done
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            5min Ago
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Waiting for Delivery
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
