import React, { Fragment } from "react";
import Navbar from './Navbar';
import SideBar from './SideBar';
import MainContent from './MainContent';

const SuggestionsPage = ({ toggleSideNav, style }) => (
  <Fragment>
    <Navbar toggleSideNav={toggleSideNav} />
    <div className="page-area">
      <SideBar style={style} />
      <MainContent style={style} />
    </div>
  </Fragment>
);

export default SuggestionsPage;
