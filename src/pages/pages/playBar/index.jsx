import React, { Component,useRef } from 'react'
import { connect } from 'react-redux';

import PlayBarBtn from '../../components/playBar/playBarBtn/index';
import PlayBarMusic from '../../components/playBar/playBarMusic/index';
import PlayBarList from '../../components/playBar/playBarList/index';
import Cover from '../discover/index';

import './style.scss';
import { timeConversion } from '../../utils/utils';
import { SET_CURRENT_MUSIC, SET_INDEX } from '../../store/actionCreate';
import { setCurrentMusic,setIndex } from '../../components/search/searchSongs/store/action';
import { useState } from 'react';
import { useEffect } from 'react';

// const PlayBar=(props)=>{
// let {autoChangeCurrentMusic,playList,index,currentMusic,showPlayer}=props;


// let [stateData,setStateData]=useState({
//     isListen: false,
//     isShowSongList: false,
//     isShowDetail: false,
//     time: '00:00',
//     endTime: '00:00',
//     proportion: 0
// })


// let timer=null;//定时器；



// function handleClickToShowDetail() {

//     setStateData({
//         ...stateData,
//         isShowDetail: !stateData.isShowDetail
//     })
// }

// async function  handleClickToPause(e) {
//     e.stopPropagation();
//     await     setStateData({
//         ...stateData,
//         isListen: !stateData.isListen
//     })
 
//  stateData.isListen ? musicNode.play() : musicNode.pause();
    
// }

// function handleClickToList(e) {
//     e.stopPropagation();

//     setStateData({
//         ...stateData,
//         isShowSongList: !stateData.isShowSongList
//     })

// }


// let getAudioRef=useRef(null);
// let musicNode=getAudioRef.current;
// function judgeMusicIsEnding() {
//    autoChangeCurrentMusic(playList, index);
// }

// function controlMusicProgress(progressW, playingProW) {
//     let timeProportion = playingProW / progressW;
//     musicNode.currentTime = currentMusic.duration * timeProportion;//赋值操作；
// }

// function calculateCurrentTime(time, proportion) {
//     setStateData({
//         ...stateData,
//         time,
//         proportion
//     })

// }



// useEffect(()=>{
//     setStateData({
//         ...stateData,
//         isListen: true
//     })
//     console.log('UNSAFE_componentWillReceiveProps')
    
// },[currentMusic])//当前音乐变了，说明props变化，把这个设计成取代UNSAFE_componentWillReceiveProps的功能；


// useEffect(()=>{
//     if(musicNode){
//         musicNode.onended = () => {
//             autoChangeCurrentMusic(playList, index);
//         }
     
//         timer = setInterval(() => {
//             let proportion = musicNode.currentTime / currentMusic.duration;//获得进度；
//             calculateCurrentTime(timeConversion(musicNode.currentTime), proportion);
//         }, 1000)
//     }

// return ()=>{
//     clearInterval(timer)
// }
// })






//     if (!showPlayer) {
//         return '';
//     }
//     return (
//         <div className='play-bar'>
//             <PlayBarBtn 
//             currentMusic={currentMusic} 
//             songStatus={stateData}
//             handleClickToShowDetail={handleClickToShowDetail}
//             handleClickToPause={handleClickToPause}
//             handleClickToList={handleClickToList}
//             />
//             <PlayBarMusic id={currentMusic.id} ref={getAudioRef}/>
//             <PlayBarList isShowSongList={stateData.isShowSongList} handleClickToList={handleClickToList}/>
//             <Cover 
//             isShowDetail={stateData.isShowDetail}
//             isListen={stateData.isListen}
//             currentMusic={currentMusic}
//             time={stateData.time}
//             proportion={stateData.proportion}
//             handleClickToShowDetail={handleClickToShowDetail}
//             handleClickToPause={handleClickToPause}
//             controlMusicProgress={controlMusicProgress}
//             />
//         </div>
//     )



// }












class PlayBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListen: false,
            isShowSongList: false,
            isShowDetail: false,
            time: '00:00',
            endTime: '00:00',
            proportion: 0
        };
    }

    handleClickToShowDetail() {
        this.setState({
            isShowDetail: !this.state.isShowDetail
        })
    }

    handleClickToPause(e) {
        e.stopPropagation();
        this.setState({
            isListen: !this.state.isListen
        }, () => {
            this.state.isListen ? this.musicNode.play() : this.musicNode.pause();
        });
        
    }

    handleClickToList(e) {
        e.stopPropagation();
        this.setState({
            isShowSongList: !this.state.isShowSongList
        })
    }

    getAudioRef(e) {
        this.musicNode = e;
    }

    judgeMusicIsEnding() {
        this.props.autoChangeCurrentMusic(this.props.playList, this.props.index);
    }

    controlMusicProgress(progressW, playingProW) {
        let timeProportion = playingProW / progressW;
        this.musicNode.currentTime = this.props.currentMusic.duration * timeProportion;
    }
    
    calculateCurrentTime(time, proportion) {
        this.setState({
            time: time,
            proportion
        })
    }
    
    UNSAFE_componentWillReceiveProps() {
        this.setState({
            isListen: true
        });
    }

    componentDidUpdate() {
        this.musicNode.onended = () => {
            this.props.autoChangeCurrentMusic(this.props.playList, this.props.index);
        }
        this.timer && clearInterval(this.timer);
        this.timer = setInterval(() => {
            let proportion = this.musicNode.currentTime / this.props.currentMusic.duration;
            this.calculateCurrentTime(timeConversion(this.musicNode.currentTime), proportion);
        }, 1000)
    }
    
    render() {
        let { currentMusic, showPlayer } = this.props;
        if (!showPlayer) {
            return '';
        }
        return (
            <div className='play-bar'>
                <PlayBarBtn 
                currentMusic={currentMusic} 
                songStatus={this.state}
                handleClickToShowDetail={this.handleClickToShowDetail.bind(this)}
                handleClickToPause={this.handleClickToPause.bind(this)}
                handleClickToList={this.handleClickToList.bind(this)}
                />
                <PlayBarMusic id={currentMusic.id} ref={this.getAudioRef.bind(this)}/>
                <PlayBarList isShowSongList={this.state.isShowSongList} handleClickToList={this.handleClickToList.bind(this)}/>
                <Cover 
                isShowDetail={this.state.isShowDetail}
                isListen={this.state.isListen}
                currentMusic={currentMusic}
                time={this.state.time}
                proportion={this.state.proportion}
                handleClickToShowDetail={this.handleClickToShowDetail.bind(this)}
                handleClickToPause={this.handleClickToPause.bind(this)}
                controlMusicProgress={this.controlMusicProgress.bind(this)}
                />
            </div>
        )
    }
}










function mapStateToProps(state) {
    return {
        playList: state.songs.playList,
        currentMusic: state.songs.currentMusic,
        showPlayer: state.songs.showPlayer,
        index: state.songs.index
    };
}

function mapDispatchToProps(dispatch) {
    return {
        autoChangeCurrentMusic(playList, index) {
            let setNextIndex;
            index === playList.length -1 ? setNextIndex = 0 : setNextIndex = (index + 1);
            dispatch(setCurrentMusic(SET_CURRENT_MUSIC, playList[setNextIndex]));//设置当前播放的音乐；
            dispatch(setIndex(SET_INDEX, setNextIndex));//设置index







        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);
