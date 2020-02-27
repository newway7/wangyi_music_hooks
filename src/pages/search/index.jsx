import React from "react";
import axios from "axios";
import { Route, Switch, NavLink } from "react-router-dom";

import SearchHeader from "../../components/search/searchHeader/index";
import SearchHotWord from "../../components/search/searchHotWord/index";
import SearchSongs from "../../components/search/searchSongs/index";
import SearchSongList from "../../components/search/searchSongList/index";
import Loading from "../../components/loading/index";

import "./style.scss";
import { useEffect } from "react";
import { useState } from "react";

const Home = props => {
  let { history,match } = props;
  console.log(props)
  let [songsData, setSongsData] = useState([]);
  let [songListData, setSongListData] = useState([]);
  let [keywords, setKeywords] = useState("");
  let [songHot, setSongHot] = useState([]);

  const toSearchResult = e => {
    if (e) {
       
      
       if (e.currentTarget.value){
        setKeywords(e.currentTarget.value);
       } 
      else{
       
        setKeywords(e.currentTarget.innerText);
      } 

      
    }
  };
 
  useEffect(() => {

      if(keywords===''){
          return ;
      }
      let Songs = new Promise((r, j) => {
        axios
          .get(
            "http://api.mtnhao.com/search?offset=0&type=1&limit=20&keywords=" +keywords)
          .then(res => {
            r(res);
          })
          .catch(err => {
            j(err);
          });
      });

      let SongList = new Promise((r, j) => {
        axios
          .get(
            "http://api.mtnhao.com/search?offset=0&type=1000&limit=20&keywords=" +keywords
          )
          .then(res => {
            r(res);
          })
          .catch(err => {
            j(err);
          });
      });

      Promise.all([Songs, SongList]).then(res => {
        setSongsData(res[0].data.result.songs);
        setSongListData(res[1].data.result.playlists);
      });
    
    history.push("/search/songs");
     // eslint-disable-next-line
  }, [keywords]);//当keywords发生变化；



  useEffect(() => {
    //只执行一次；
    const getHotWord = () => {
      axios
        .get("http://api.mtnhao.com/search/hot")
        .then(res => {
            console.log(res.data.result.hots)
          setSongHot(res.data.result.hots);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getHotWord();
  }, []);

  const handleClickToPlayPage = id => {
    history.push("/playlist/" + id);
  };

  let navTab = "";
  if (match.path !=='/search') {//判断路由路径；
    navTab = (
      <div className="search-nav">
        <NavLink to="/search/songs">单曲</NavLink>
        <NavLink to="/search/songList">歌单</NavLink>
      </div>
    );
  }

  return (
    <div className="search-wrap">
      <SearchHeader toSearchResult={toSearchResult} />
      {songHot.length === 0 ? <Loading /> : ""}
      {navTab}
      <Switch>
        <Route path="/search" exact>
          <SearchHotWord songHot={songHot} handleToClickHot={toSearchResult} />
        </Route>
        <Route path="/search/songs">
          <SearchSongs songsData={songsData} Loading={Loading} />
        </Route>
        <Route path="/search/songList">
          <SearchSongList
            songListData={songListData}
            handleClickToPlayPage={handleClickToPlayPage}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
