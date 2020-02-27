import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';
import toBack from '../../../assets/back.png';


const SongListHeader=(props)=>{
    let {history}=props;
    const handleClickToBack=()=>{
        history.go(-1); 
    }
    return (
        <div className='song-lists-header'>
            <img className='toback' src={toBack} alt="" onClick={handleClickToBack}/>
            <p>歌单</p>
        </div>
    );
}



export default withRouter(SongListHeader);