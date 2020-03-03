import React from "react";
import LazyLoad from "react-lazyload";
import { withRouter} from "react-router-dom";

import "./style.scss";

import { playCountConversion } from "../../../utils/utils";

const HomeSongListItem = props => {
  let { img, name, playCount, id } = props;

  return (
    <div
      className="home-song-item"
      onClick={() => {
        props.history.push("/playList/" + id);
      }}
    >
      <img src={img + "?param=200y200"} alt="" />
      <p>{name}</p>
      <div className="headset-icon">{playCountConversion(playCount)}</div>
    </div>
  );
};

const HomeSongListItemWithRouter = withRouter(HomeSongListItem);


const HomeSongList=(props)=>{
    let {songList}=props;
    return (
        <div className="home-song-list clearfix">
          {songList.map((item, index) => {
            return (
              <LazyLoad once offset={100} key={index}>
                <HomeSongListItemWithRouter
                  img={item.picUrl}
                  name={item.name}
                  key={index}
                  playCount={item.playCount}
                  id={item.id}
                />
              </LazyLoad>
            );
          })}
        </div>
      );
}




export default React.memo(HomeSongList);
