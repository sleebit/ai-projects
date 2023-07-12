"use client";
import { useState, useEffect, useRef } from "react";
import { PowerIcon, SunIcon } from "lucide-react";
import Weather from "../../assets/components/weather";

import "./index.css";

export default function ClimatePlayer() {
  const [index, setIndex] = useState(0);

  const mountainsRef = useRef(null);

  const handleRotIconsClick = () => {
    setIndex(index == 0 ? 0 : index == 5 ? 0 : index + 1);
    if (index === 0) {
      console.log("sun");
      mountainsRef.current.classList.remove("storm");
      mountainsRef.current.classList.remove("snow");
      mountainsRef.current.classList.remove("clouds");
    } else if (index === 1) {
      console.log("sunset");
      mountainsRef.current.classList.add("sunset");
    } else if (index === 2) {
      console.log("moon");
      mountainsRef.current.classList.remove("sunset");
      mountainsRef.current.classList.add("moon");
    } else if (index === 3) {
      console.log("clouds");
      mountainsRef.current.classList.add("clouds");
    } else if (index === 4) {
      console.log("storm");
      mountainsRef.current.classList.add("storm");
    } else if (index === 5) {
      console.log("snow");
      mountainsRef.current.classList.remove("moon");
      mountainsRef.current.classList.remove("storm");
      mountainsRef.current.classList.add("snow");
    }
  };
  return (
    <>
      <div className="top-overlay">
        <div className="outer-rim power-on">
          <div className="">
            <div className="inner-rim">
              <div className="outer-window">
                <div className="window">
                  <div className="window-rounded lg:w-[55vw] lg:h-[50vh]">
                    <Weather mountainsRef={mountainsRef} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-4">
          <SunIcon className="cursor-pointer" onClick={handleRotIconsClick} />
        </div>
      </div>
    </>
  );
}
