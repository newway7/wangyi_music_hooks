import React          from "react";
import { withRouter } from "react-router-dom";

import "./style.scss";

const RankListGlobal = props => {
  const { rankList, history } = props;
  return (
    <div className="rank-list-global clearfix">
      {rankList.map((item, index) => {
        return (
          <div
            className="rank-global-item"
            key={index}
            onClick={() => {
              history.push("/playList/" + item.id);
            }}
          >
            <img src={item.coverImgUrl + "?param=150y150"} alt="" />
            <span>{item.updateFrequency}</span>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(RankListGlobal);
