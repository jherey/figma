import React, { Fragment } from "react";
import menuToggleIcon from "../assets/nav-toggle.svg";
import planeIcon from "../assets/plane-icon.svg";
import expandMoreIcon from "../assets/expand-more.svg";
import notificationIcon from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import profileIcon from "../assets/profile-icon.svg";
import dashboardIcon from "../assets/icon-dashboard.svg";
import reportsIcon from "../assets/icon-reports.svg";
import fileIcon from "../assets/icon-file.svg";
import itemsIcon from "../assets/icon-items.svg";
import clientIcon from "../assets/icon-clients.svg";
import sendIcon from "../assets/icon-send.svg";
import settingsIcon from "../assets/icon-settings.svg";
import clientActiveIcon from "../assets/icon-clients-active.svg";
import handshakeIcon from "../assets/handshake-icon.svg";

const SuggestionsPage = () => (
  <Fragment>
    <header className="nav-header">
      <div className="nav-toggle">
        <img src={menuToggleIcon} alt="toggle-menu" />
      </div>
      <div className="feedback">Feedback</div>
      <div className="right-area">
        <button className="btn secondary-btn invite-btn">
          <img src={planeIcon} alt="invite" />
          Invite
        </button>
        <button className="btn primary-btn create-new-btn">
          Create new ...
          <img src={expandMoreIcon} alt="load-more" />
        </button>
        <img
          src={notificationIcon}
          alt="notification"
          className="notification-icon"
        />
        <div className="user-info">
          <div className="name">Ukauwa David</div>
          <div className="role">Wanted creative Agancy</div>
        </div>
        <img src={avatar} alt="avatar" className="avatar" />
        <img src={profileIcon} alt="profile" />
      </div>
    </header>
    <div className="page-area">
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

      <div className="content-area">
        <div className="content-card">
          <p className="main-info">
            Join us in developing Vencru to better serve your growing business
          </p>
          <img src={handshakeIcon} alt="handshake" />
          <p className="colab-info">
            Collaborate on the evolution of Vencru by leaving feedback,
            suggesting, voting and commenting on ideas you believe in.
          </p>
          <div className="content-btns">
            <button
              className="btn green-btn"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Launch demo modal
            </button>
            <button className="btn primary-btn">Enter ideas portal</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default SuggestionsPage;
