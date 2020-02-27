import React                     from 'react';
import { withRouter,useHistory } from 'react-router-dom';

import './style.scss';

import songList                  from '../../../assets/menu.png';
import rankingList               from '../../../assets/rank.png';

const HomeOption=()=>{
 let history=useHistory();
 return (
    <div className='home-option'>
        <div className="song-list" onClick={() => history.push('/songList')}>
            <img src={songList} alt=""/>
            <div>歌单</div>
        </div>
        <div className="ranking-list" onClick={() => history.push('/rankList')}>
            <img src={rankingList} alt=""/>
            <div>排行榜</div>
        </div>
    </div>
);
}



export default withRouter(HomeOption);