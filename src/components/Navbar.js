import React, { Fragment } from 'react';
import menuToggleIcon from "../assets/nav-toggle.svg";
import planeIcon from "../assets/plane-icon.svg";
import expandMoreIcon from "../assets/expand-more.svg";
import notificationIcon from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import profileIcon from "../assets/profile-icon.svg";

const Navbar = () => (
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
  </Fragment>
);

export default Navbar;
