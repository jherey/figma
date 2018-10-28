import React, { Fragment } from "react";
import Navbar from './Navbar';
import SideBar from './SideBar';
import MainContent from './MainContent';

const SuggestionsPage = () => (
  <Fragment>
    <Navbar />
    <div className="page-area">
      <SideBar />
      <MainContent />
    </div>
  </Fragment>
);

export default SuggestionsPage;
