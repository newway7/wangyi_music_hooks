import React from 'react';

import './style.scss';

const SearchSongList=(props)=>{
let {songListData,handleClickToPlayPage}=props;
return (
    <div className='search-song-list'>
        {
            songListData.map((item, index) => {
                return (
                    <div className="search-song-list-item" key={index} onClick={() => {handleClickToPlayPage(item.id)}}>
                        <img src={item.coverImgUrl + '?param=70y70'} alt=""/>
                        <div className="song-list-detail">
                            <h3>{item.name}</h3>
                            <p>{item.trackCount} by {item.creator.nickname}，播放{item.playCount}次</p>
                        </div>
                    </div>
                );
            })
        }
    </div>
);

}



export default  React.memo(SearchSongList) ;