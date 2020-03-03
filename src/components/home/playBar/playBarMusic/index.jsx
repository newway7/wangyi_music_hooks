import React, { Component } from 'react'

import './style.scss';





const PlayBarMusic=(props)=>{
    let {id,musicNode}=props;
    return (
        <div className='playing-music'>
            <audio src={'https://music.163.com/song/media/outer/url?id='+id+'.mp3'} autoPlay ref={musicNode}></audio>
        </div>
    );
}


export default React.memo(PlayBarMusic)
