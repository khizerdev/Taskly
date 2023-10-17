import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="relative flex -space-x-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex -space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item className="px-5 py-2">
                {({ active }) => (
                  <Link
                    className={`${
                      active ? "rounded bg-[#f9f9f9] text-[#3e97ff]" : ""
                    } flex cursor-pointer items-center font-medium text-[#252F4A] transition-colors`}
                  >
                    My Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item className="px-5 py-2">
                {({ active }) => (
                  <Link
                    className={`${
                      active ? "rounded bg-[#f9f9f9] text-[#3e97ff]" : ""
                    } flex cursor-pointer items-center font-medium text-[#252F4A] transition-colors`}
                  >
                    My Projects
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item className="px-5 py-2">
                {({ active }) => (
                  <Link
                    className={`${
                      active ? "rounded bg-[#f9f9f9] text-[#3e97ff]" : ""
                    } flex cursor-pointer items-center font-medium text-[#252F4A] transition-colors`}
                  >
                    Sign Out
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserMenu;