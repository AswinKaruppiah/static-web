import React from "react";
import "./Part1.css";
import home from "./shawnanggg-yyKsGgQXukY-unsplash.jpg";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Freq from "./download-soundwave-icon-clipart-wave-vector-clip-art-sound-wave-170016.png";
import Map from "./ve-01.png";

function Part1() {
  return (
    <>
      <div className="containsub">
        <div className="subpart1">
          <div className="minsub1">
            <div data-aos="fade-down" className="sub1">
              <h1 className="subh">Monitor health of your business</h1>
              <p className="subp">
                Control and analyze your data in the easiest way
              </p>
            </div>
            <div className="sub2">
              <form data-aos="fade-down">
                <SearchIcon className="icon" fontSize="large" />
                <input className="text" type={"text"} placeholder="search" />
                <button>
                  <EventNoteIcon className="event" fontSize="large" />
                </button>
              </form>
              <ul data-aos="zoom-in" className="sub1ul">
                <li className="sp">Week</li>
                <li className="sp">Month</li>
                <li className="sp">Year</li>
              </ul>
            </div>
          </div>
          <div className="sub3">
            <div data-aos="zoom-in" className="mincon">
              <div className="sub3hold">
                <h3 className="sub3h">Views</h3>
                <GridViewOutlinedIcon className="icon2" sx={{ fontSize: 25 }} />
              </div>
              <div className="imghold2">
                <img className="img2" src={Map} />
              </div>
              <div className="hold2">
                <p className="sub3p">
                  <span className="num">31</span>+3 Last day
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="mincon">
              <div className="sub3hold">
                <h3 className="sub3h">Clients</h3>
                <PermIdentitySharpIcon
                  className="icon2"
                  sx={{ fontSize: 25 }}
                />
              </div>
              <div className="imghold">
                <img className="img" src={Freq} />
              </div>

              <div className="hold2">
                <p className="sub3p">
                  <span className="num">63</span>+1 Last day
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="mincon">
              <div className="sub3hold">
                <h3 className="sub3h">Purchases</h3>
                <MarkChatReadOutlinedIcon
                  className="icon2"
                  sx={{ fontSize: 25 }}
                />
              </div>
              <div className="hold2">
                <p className="sub3p">
                  <span className="num">10</span>+1 Last day
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="subpart2">
          <img className="home" src={home} />
        </div>
      </div>
    </>
  );
}

export default Part1;
//<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
