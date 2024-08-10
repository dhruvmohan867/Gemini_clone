"use client";
import React, { useContext, useState, useEffect } from "react";
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  Youtube,
  Code,
  SendHorizontal,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";
import NamePromptModal from './Name';
import Image from 'next/image';

const GeminiBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      {showModal && <NamePromptModal setName={setName} closeModal={closeModal} />}
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p>Gemini</p>
        <CircleUserRound size={40} className="text-softTextColor" />
      </div>
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Hello, {name || "Guest"}
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="overflow-x-auto pb-2 flex">
              <div className="flex fin gap-5 p-5">
                <div className="cards_1 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <Compass
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
                <div className="cards_2 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>What&apos;s the reaction to and impact of autonomous vehicles?</p>
                  <Lightbulb
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
                <div className="cards_3 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>Come up with a recipe for an upcoming event</p>
                  <Youtube
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
                <div className="cards_4 bg-bgSecondaryColor rounded-xl relative cursor-pointer">
                  <p>Evaluate and rank common camera categories</p>
                  <Code
                    size={35}
                    className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="my-10 flex items-center gap-5">
              <CircleUserRound size={40} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start gap-5">
              <Image src="/gemini.png" alt="Gemini" width={500} height={500} />
              <p
                className="text-md font-normal leading-6 text-gray-400"
                dangerouslySetInnerHTML={{ __html: result }}
              ></p>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-[900px] px-5">
          <form action={submit}>
            <div className="flex colo mt-[100px] items-center justify-between gap-5 py-2.5 px-5 rounded-full">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                placeholder="Enter a prompt here"
              />
              <div className="flex cursor-pointer">
                <SendHorizontal type="submit" size={20} />
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center p-3">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeminiBody;
