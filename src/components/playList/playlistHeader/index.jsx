import React  from 'react';

import './style.scss';

import toBack from '../../../assets/back.png';

const PlaylistHeader=(props)=>{
    const { songlistDetail,handleClickToBack } =props; 

    if (!songlistDetail.coverImgUrl) {
        return '';
    }

    return (
        <div className='playlist-header'>
            <img className='toback' src={toBack} alt="" onClick={handleClickToBack}/>
            <p>{songlistDetail.name}</p>
            <div className="blur-bg" style={{backgroundImage: 'url('+ songlistDetail.coverImgUrl+'?param=100y100)'}}></div>
        </div>
    );



}





export default React.memo(PlaylistHeader);