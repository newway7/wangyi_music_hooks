import React                     from 'react';
import { withRouter,useHistory } from 'react-router-dom';

import './style.scss';

import { playCountConversion }   from '../../../utils/utils';

const HomeSongList=(props)=>{
    let history=useHistory();
    let {songList}=props
    return (
        <div className='home-song-list clearfix'>
            {songList.map((item, index) => {
                return (
                    <div className="home-song-item" key={index} onClick={() =>history.push('/playList/' + item.id)}>
                        <img src={item.picUrl + '?param=200y200'} alt=""/>
                        <p>{item.name}</p>
                        <div className="headset-icon">{playCountConversion(item.playCount)}</div>
                    </div>
                );
            })}
            
        </div>
    );
}


export default withRouter(HomeSongList);