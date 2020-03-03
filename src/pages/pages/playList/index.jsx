import React ,{ useEffect,useState }from 'react';
import axios from 'axios';

import './style.scss';

import PlaylistHeader from '../../components/playList/playlistHeader/index';
import PlaylistDepict from '../../components/playList/playlistDepict/index';
import PlaylistItem from '../../components/playList/playlistItem/index';




const Playlist=(props)=>{
let {history,match}=props;

 const [songlistDetail,setSonglistDetail]=useState([]);
 const [ playlist,setPlaylist]=useState([]);
 const [songList,setSongList]=useState([]);

 const handleClickToBack=()=>{
    history.go(-1);
}
useEffect(()=>{

   const  getCurrentSongList=(list)=> {
        let songList = [];
        for (let i = 0; i < list.length; i++) {
            songList.push({ 
                id: list[i].id, 
                name: list[i].name,
                singer: list[i].ar[0].name,
                image: list[i].al.picUrl,
                duration: list[i].dt / 1000
            });
        }
        return songList;
    }
    const initPageData=(callback)=>{
        axios.get('http://api.mtnhao.com/playlist/detail?id=' + match.params.id)
             .then(res => {

                setSonglistDetail(res.data.playlist) 
                setPlaylist(res.data.playlist.tracks)
                setSongList(callback(res.data.playlist.tracks))
             })
             .catch(err => console.log(err));
    }
    initPageData(getCurrentSongList);
},[match.params.id])

return (
    <div className='playlist-wrap'>
        <PlaylistHeader handleClickToBack={handleClickToBack} songlistDetail={songlistDetail}/>
        <PlaylistDepict songlistDetail={songlistDetail}/>
        <PlaylistItem playlist={playlist} songList={songList}/>
    </div>
);
}










export default Playlist;