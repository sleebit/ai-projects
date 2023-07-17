"use client";
import Weather from "../../assets/components/weather";

import "./index.css";

export default function ClimatePlayer() {
  return (
    <>
      <div className="top-overlay mt-[45px] md:mt-[30px] lg:mt-[30px] ">
        <div className="outer-rim power-on">
          <div className="">
            <div className="inner-rim">
              <div className="outer-window">
                <div className="window">
                  <div className="window-rounded w-[100vw] lg:w-[55vw] lg:h-[50vh]">
                    <Weather />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
