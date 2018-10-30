import React, { Fragment } from 'react';
import dashboardIcon from "../assets/icon-dashboard.svg";
import reportsIcon from "../assets/icon-reports.svg";
import fileIcon from "../assets/icon-file.svg";
import itemsIcon from "../assets/icon-items.svg";
import clientIcon from "../assets/icon-clients.svg";
import sendIcon from "../assets/icon-send.svg";
import settingsIcon from "../assets/icon-settings.svg";
import clientActiveIcon from "../assets/icon-clients-active.svg";

const SideBar = ({ style }) => (
  <Fragment>
    <nav className="menu-nav" style={style.navWidth}>
        <ul style={style.lastHack}>
          <li>
            <img src={dashboardIcon} alt="dashboard" />
            <span style={style}>Dashboard</span>
          </li>
          <li>
            <img src={fileIcon} alt="sales" />
            <span style={style}>Sales</span>
          </li>
          <li>
            <img src={reportsIcon} alt="reports" />
            <span style={style}>Expenses</span>
          </li>
          <li>
            <img src={itemsIcon} alt="items" />
            <span style={style}>Items</span>
          </li>
          <li>
            <img src={clientIcon} alt="clients" />
            <span style={style}>Clients</span>
          </li>
          <li>
            <img src={sendIcon} alt="campaigns" />
            <span style={style}>Campaigns</span>
          </li>
          <li>
            <img src={settingsIcon} alt="settings" />
            <span style={style}>Settings</span>
          </li>
          <li className="active">
            <img src={clientActiveIcon} alt="feedback" />
            <span style={style}>Feedback</span>
          </li>
        </ul>
      </nav>
  </Fragment>
);

export default SideBar;
