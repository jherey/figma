import React, { Fragment } from 'react';
import dashboardIcon from "../assets/icon-dashboard.svg";
import reportsIcon from "../assets/icon-reports.svg";
import fileIcon from "../assets/icon-file.svg";
import itemsIcon from "../assets/icon-items.svg";
import clientIcon from "../assets/icon-clients.svg";
import sendIcon from "../assets/icon-send.svg";
import settingsIcon from "../assets/icon-settings.svg";
import clientActiveIcon from "../assets/icon-clients-active.svg";

const SideBar = () => (
  <Fragment>
    <nav className="menu-nav">
        <ul>
          <li>
            <img src={dashboardIcon} alt="dashboard" />
            Dashboard
          </li>
          <li>
            <img src={fileIcon} alt="sales" />
            Sales
          </li>
          <li>
            <img src={reportsIcon} alt="reports" />
            Expenses
          </li>
          <li>
            <img src={itemsIcon} alt="items" />
            Items
          </li>
          <li>
            <img src={clientIcon} alt="clients" />
            Clients
          </li>
          <li>
            <img src={sendIcon} alt="campaigns" />
            Campaigns
          </li>
          <li>
            <img src={settingsIcon} alt="settings" />
            Settings
          </li>
          <li className="active">
            <img src={clientActiveIcon} alt="feedback" />
            Feedback
          </li>
        </ul>
      </nav>
  </Fragment>
);

export default SideBar;
