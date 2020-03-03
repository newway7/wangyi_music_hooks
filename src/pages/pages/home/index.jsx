import React,{ useEffect,useState } from 'react';
import axios from 'axios';

import './style.scss';
import HomeHeader from '../../components/home/homeHeader/index';
import HomeCarousel from '../../components/home/homeCarousel/index';
import HomeOption from '../../components/home/homeOption/index';
import HomeSongList from '../../components/home/homeSongList/index';



const Home=()=>{
   let [songList,setSongList]=useState([]);

useEffect(()=>{
   let getSongListData=()=> {
        axios.get('/personalized')
             .then(res => {
                 
                setSongList(res.data.result)
                 });
             
    }
    getSongListData();
},[])

return (
    <div className='home-wrap'>
        <HomeHeader/>
        <div className="carousel-bg"></div>
        <HomeCarousel/>
        <HomeOption/>
        <h3>推荐歌单</h3>
        <HomeSongList songList={songList}/>
    </div>
);

}

export default Home ;