import React                   from 'react'



import './style.scss';

import listen                  from '../../../assets/headset.png'
import { playCountConversion } from '../../../utils/utils';
import Loading                 from '../../loading/index';

const PlaylistDepict=(props)=>{
    const {songlistDetail} = props;
    if (!songlistDetail.coverImgUrl) {
        return <Loading/>
    }
    return (
        <div className='playlist-depict'>
            <div className="playlist-pic">
                <img src={songlistDetail.coverImgUrl + '?param=100y100'} alt=""/>
                <div className="listen-icon">
                    <img src={listen} alt=""/>
                    {playCountConversion(songlistDetail.playCount)}
                </div>
            </div>
            <div className="playlist-detail">
                <h3>{songlistDetail.name}</h3>
                <p>
                    <img src={songlistDetail.creator.avatarUrl + '?param=50y50'} alt=""/>
                    <span>{songlistDetail.creator.nickname}</span>
                </p>
            </div>
            <div className="blur-bg" style={{backgroundImage: 'url('+ songlistDetail.coverImgUrl+'?param=100y100)'}}></div>
        </div>
    )

}







export default PlaylistDepict;
