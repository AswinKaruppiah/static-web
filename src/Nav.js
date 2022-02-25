import React from "react";
import "./Nav.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav-nav">
          <ul data-aos="fade-right" className="navitem">
            <li className="nav-list">
              <AccountCircleOutlinedIcon fontSize="large" />
            </li>
            <li className="nav-list">
              <EventNoteTwoToneIcon fontSize="large" />
            </li>
            <li className="nav-list">
              <AddLocationAltTwoToneIcon fontSize="large" />
            </li>
            <li className="nav-list">
              <BarChartRoundedIcon fontSize="large" />
            </li>
            <li className="nav-list">
              <SettingsApplicationsSharpIcon fontSize="large" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
