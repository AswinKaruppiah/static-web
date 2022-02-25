import React from "react";
import "./Part2.css";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import villa1 from "./4401384.jpg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import villa2 from "./4401282.jpg";

import Linec from "./Linec";

function Part2() {
  return (
    <>
      <div className="part2sub">
        <div className="part2min1">
          <Linec />
        </div>
        <div className="part2min2">
          <div data-aos="fade-up">
            <div className="part2li">
              <div className="navp31">
                <li className="part2item">Objects</li>
                <li className="part2item">Realtors</li>
              </div>
              <div className="navp32">
                <li className="seacrh">
                  <ManageSearchOutlinedIcon sx={{ fontSize: 30 }} />
                </li>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="villacard">
            <div className="villa">
              <div className="villain">
                <img className="villap" src={villa1} />
                <p>
                  <span className="villapa">Seaview Villa</span>
                  <ArrowDropUpIcon sx={{ fontSize: 30 }} className="arrow" />
                  18%
                </p>
              </div>
            </div>
            <div className="villa">
              <div className="villain">
                <img className="villap" src={villa2} />
                <p>
                  <span className="villapa">Windmill Loft</span>
                  <ArrowDropUpIcon sx={{ fontSize: 30 }} className="arrow" />
                  25%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Part2;
