import React, { Fragment } from 'react';
import handshakeIcon from "../assets/handshake-icon.svg";

const MainContent = ({ style }) => (
  <Fragment>
    <div className="content-area" style={style.contentArea}>
        {/* <div className="content-area"> */}
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
              className="btn green-btn main-buttons"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Leave feedback
            </button>
            <button className="btn primary-btn main-buttons portal">Enter ideas portal</button>
          </div>
        </div>
      </div>
  </Fragment>
);

export default MainContent;
