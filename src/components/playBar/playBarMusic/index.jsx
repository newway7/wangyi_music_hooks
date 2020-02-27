import React, { Component } from 'react'

import './style.scss';

const PlayBarMusic=React.forwardRef((props,ref)=>{
    let {id}=props;
    return (
        <div className='playing-music'>
            <audio src={'https://music.163.com/song/media/outer/url?id='+id+'.mp3'} autoPlay ref={ref}></audio>
        </div>
    );
})






export default  PlayBarMusic; 