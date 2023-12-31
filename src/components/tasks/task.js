import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ id, task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "task",
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={`mb-3 block w-full cursor-pointer rounded bg-white px-2.5 py-1 shadow-md ${
        isDragging && "opacity-50"
      }`}
    >
      <div className="flex py-1.5">
        <span className="block flex-1 text-sm text-gray-700" {...listeners}>
          {task?.title}
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-1">
          {/**/}
          <div className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-1 h-4 w-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span className="text-xs text-gray-500">{task?.end_Date}</span>
          </div>
        </div>
        <div className="flex items-center py-1">
          <img
            className="h-4 w-4 rounded-full"
            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg"
            alt="avatar"
            title="Admin"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
