import React                     from "react";
import { withRouter,useHistory } from "react-router-dom";

import "./style.scss";

const HomeHeader = () => {
  let history = useHistory();


  return (
    <div className="home-header">
      <div className="home-menu"></div>
      <div className="home-logo"></div>
      <div className="home-search" onClick={() => history.push("/search")}></div>
    </div>
  );
};

export default withRouter(HomeHeader);
