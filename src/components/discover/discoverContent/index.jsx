import React from 'react'

import './style.scss';


const DiscoverContent=(props)=>{
    const { isListen, currentMusic, handleClickToPause } =props;

    return (
        <div className='discover-content'>
            <div className={isListen ? "listen-bar listen" : "listen-bar"}></div>
            <div className={isListen ? "spin-disc rotate" : "spin-disc"} onClick={handleClickToPause}>
                <img src={currentMusic.image + '?param=200y200'} alt=""/>
            </div>
        </div>
    )

}







export default  DiscoverContent ;
