import React from 'react';

import SongListHeader from '../../components/songList/songListHeader';
import SongLists from '../../components/songList/songLists';

import './style.scss';



const Home=()=>{
    return  (
        <div className='song-list-wrap'>
            <SongListHeader/>
            <SongLists/>
        </div>
    );
}

export default Home ;