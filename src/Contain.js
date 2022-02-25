import React, { useEffect } from "react";
import "./Contain.css";
import Part1 from "./Part1";
import Part2 from "./Part2";
import AOS from "aos";
import "aos/dist/aos.css";

function Contain() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  //data-aos="fade-up"
  return (
    <>
      <div className="contain">
        <div className="contain1">
          <Part1 />
        </div>
        <div className="contain2">
          <Part2 />
        </div>
      </div>
    </>
  );
}

export default Contain;
