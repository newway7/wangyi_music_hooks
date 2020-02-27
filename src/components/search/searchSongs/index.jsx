import React       from "react";
import { connect } from "react-redux";

import "./style.scss";

import {
  SET_INDEX,
  SET_PLAY_LIST,
  SET_PLAY_STATUS
}                  from "../../../store/actionCreate";
import {
  setIndex,
  setPlayList,
  setSongsDetail,
  setPlayStatus
}                  from "./store/action";

const SearchSongs = props => {
  let { Loading, songsData, currentMusic, handleToClick } = props;
  if (songsData.length === 0) {
    return <Loading />;
  }
  return (
    <div className="search-songs">
      {songsData.map((item, index) => {
        return (
          <div
            className="search-songs-item"
            key={index}
            onClick={() => {
              handleToClick({
                index,
                playStatus: true,
                music: {
                  id: item.id,
                  name: item.name,
                  singer: item.artists[0].name,
                  image: item.artists[0].img1v1Url,
                  duration: item.duration / 1000
                }
              });
            }}
          >
            <>
              <h2 className={currentMusic.id === item.id ? "active" : null}>
                {item.name}
              </h2>
              <p className={currentMusic.id === item.id ? "active" : null}>
                {item.artists[0].name} - {item.album.name}
              </p>
            </>
          </div>
        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    index: state.songs.index,
    currentMusic: state.songs.currentMusic
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleToClick(arg) {
      const { index, playStatus, music } = arg;
      dispatch(setIndex(SET_INDEX, index));
      dispatch(setPlayList(SET_PLAY_LIST, music));
      dispatch(setPlayStatus(SET_PLAY_STATUS, playStatus));
      dispatch(setSongsDetail(music.id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSongs);
