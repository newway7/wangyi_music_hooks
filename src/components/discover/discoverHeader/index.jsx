import React from 'react'

import './style.scss';
import back from '../../../assets/back.png';


const DiscoverHeader=(props)=>{
    const { currentMusic,handleClickToShowDetail } = props;
    return (
        <div className='discover-header'>
            <img src={back} alt="" onClick={handleClickToShowDetail}/>
            <div className="discover-header-songs">
                <h3>{currentMusic.name}</h3>
                <p>{currentMusic.singer}</p>
            </div>
        </div>
    )
}


export default DiscoverHeader;