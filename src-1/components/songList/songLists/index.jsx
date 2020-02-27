import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './style.scss';
import { playCountConversion } from '../../../utils/utils';
const SongLists=(props)=>{
 let {history}=props;
 let [songList,setSongList]=useState([]);
 useEffect(() => {
    const getSongList = async () => {
      //获取轮播图的图片地址数组；
      await axios.get("/top/playlist?offset=0&order=hot&limit=20").then(res => {
        setSongList(res.data.playlists);
      }).catch(err => console.log(err));;
    };
    getSongList();
  }, []); //只执行一次；
  return (
    <div className='song-lists clearfix'>
        {songList.map((item, index) => {
            return (
                <div className="song-item" key={index} onClick={() => {history.push('/playList/' + item.id)}}>
                    <img src={item.coverImgUrl + '?param=200y200'} alt=""/>
                    <p>{item.name}</p>
                    <div className="headset-icon">{playCountConversion(item.playCount)}</div>
                </div>
            );
        })}
        
    </div>
);



}

export default withRouter(SongLists);