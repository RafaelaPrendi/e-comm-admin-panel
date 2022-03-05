import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="flex flex-row">
        {props.sidebar && <div className="sidebar">
          <Sidebar />
        </div>}
        <div className="childrenContainer">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
