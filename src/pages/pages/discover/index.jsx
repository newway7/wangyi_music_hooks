import React,{ useState } from 'react';

import DiscoverHeader from '../../components/discover/discoverHeader/index';
import DiscoverContent from '../../components/discover/discoverContent/index';
import DiscoverProgress from '../../components/discover/discoverProgress/index';
import DiscoverBtn from '../../components/discover/discoverBtn/index';
import PlayBarList from '../../components/playBar/playBarList/index';

import './style.scss';



const Cover=(props)=>{
    let [isShowSongList,setIsShowSongList]=useState(false);

    const { 
        isShowDetail, 
        isListen, 
        time,
        proportion,
        currentMusic, 
        handleClickToShowDetail, 
        handleClickToPause, 
        controlMusicProgress
    } = props;
   let handleClickToList=()=> {
    setIsShowSongList(!isShowSongList);
    }

    return (
        <div className={isShowDetail ? 'cover-wrap show' : 'cover-wrap'}>
            <DiscoverHeader handleClickToShowDetail={handleClickToShowDetail} currentMusic={currentMusic}/>
            <DiscoverContent isListen={isListen} currentMusic={currentMusic} handleClickToPause={handleClickToPause}/>
            <DiscoverProgress controlMusicProgress={controlMusicProgress} time={time} proportion={proportion} currentMusic={currentMusic}/>
            <DiscoverBtn isListen={isListen} handleClickToList={handleClickToList} handleClickToPause={handleClickToPause}/>
            <PlayBarList isShowSongList={isShowSongList} handleClickToList={handleClickToList}/>
            <div className="cover-mask" style={{'backgroundImage': 'url(' + currentMusic.image + '?param=200y200)'}}></div>
        </div>
    );

}

export default Cover; 