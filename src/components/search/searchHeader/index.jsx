import React          from "react";
import { withRouter } from "react-router-dom";

import "./style.scss";
import back           from "../../../assets/back.png";

const SearchHeader = props => {
  let { history, toSearchResult } = props;
  const toBack = () => {
    history.go(-1);
  };
  const searchMiddleWare = e => {
    if (e.keyCode === 13) {
      toSearchResult(e);
    }
  };
  return (
    <div className="search-header">
      <img className="search-goback" src={back} alt="" onClick={toBack} />
      <input
        type="text"
        placeholder="搜索你喜欢的"
        onKeyDown={searchMiddleWare}
      />
    </div>
  );
};

export default withRouter(SearchHeader);
