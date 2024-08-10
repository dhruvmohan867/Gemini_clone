"use client";
import React, { useContext, useState } from "react";
import {
  Menu,
  Plus,
  CircleHelp,
  Activity,
  MessageSquare,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { setDisplayResult, setInput, prevPrompts, setRecentPrompts, submit } =
    useContext(Context);

  const loadPrompt = (prompt) => {
    setRecentPrompts(prompt);
    submit(prompt);
  };

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-black py-6 px-4 text-white">
      <div>
        <Menu
          size={25}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-white"
        />
        <div
          className="mt-2.5 inline-flex py-2.5 items-center gap-2.5 px-4 bg-gray-800 rounded-full text-md text-white cursor-pointer"
          onClick={() => {
            setDisplayResult(false);
            setInput("");
          }}
        >
          <Plus size={20} className="cursor-pointer text-white" />
          {isOpen ? <p>New chat</p> : null}
        </div>
        {isOpen ? (
          <div className="flex flex-col">
            <p className="mt-8 mb-5">Recent</p>
            {prevPrompts?.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="my-2 flex items-center gap-2.5 pr-10 rounded-full text-white cursor-pointer hover:bg-gray-700 p-2 bg-gray-800"
              >
                <MessageSquare
                  size={20}
                  className="cursor-pointer text-white"
                />
                <p>{item?.slice(0, 15)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-5">
        <div className="pr-2.5 cursor-pointer flex gap-2 text-white items-center">
          <CircleHelp size={20} className="text-white" />
          {isOpen ? <p>Help</p> : null}
        </div>
        <div className="pr-2.5 cursor-pointer flex gap-2 text-white items-center">
          <Activity size={20} className="text-white" />
          {isOpen ? <p>Activity</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
