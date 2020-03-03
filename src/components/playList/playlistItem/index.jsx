import React from "react";
import { connect } from "react-redux";

import "./style.scss";
import {
  SET_INDEX,
  SET_CURRENT_MUSIC,
  SET_PLAYLIST_LIST,
  SET_PLAY_STATUS
} from "../../../store/actionCreate";
import {
  setIndex,
  setPlayList,
  setCurrentMusic,
  setPlayStatus
} from "../../search/searchSongs/store/action";

const PlaylistItem = props => {
  const { playlist, currentMusic, songList, handleToClick } = props;

  return (
    <div className="playlist-item">
      {playlist.map((item, index) => {
        return (
          <div
            className="songlist-item"
            key={index}
            onClick={() => {
              handleToClick({
                index,
                playStatus: true,
                songList,
                music: {
                  id: item.id,
                  name: item.name,
                  singer: item.ar[0].name,
                  image: item.al.picUrl,
                  duration: item.dt / 1000
                }
              });
            }}
          >
            <>
              <span
                className={`songlist-index ${
                  currentMusic.id === item.id ? "active" : ""
                }`}
              >
                {index + 1}
              </span>
              <div
                className={`songlist-detail ${
                  currentMusic.id === item.id ? "active" : ""
                }`}
              >
                <h3>{item.name}</h3>
                <p className={currentMusic.id === item.id ? "active" : ""}>
                  {item.ar[0].name} - {item.al.name}
                </p>
              </div>
            </>
            
          </div>
        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentMusic: state.songs.currentMusic
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleToClick(arg) {
      const { index, playStatus, music, songList } = arg;
      dispatch(setIndex(SET_INDEX, index));
      dispatch(setPlayList(SET_PLAYLIST_LIST, songList));
      dispatch(setPlayStatus(SET_PLAY_STATUS, playStatus));
      dispatch(setCurrentMusic(SET_CURRENT_MUSIC, music));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlaylistItem));
