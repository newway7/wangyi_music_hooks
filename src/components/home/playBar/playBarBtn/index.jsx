import React, { PureComponent as Component } from 'react'

import './style.scss';



// class PlayBarBtn extends Component {
//     render() {
//         const { currentMusic, songStatus } = this.props;

//         return (
//             <div className='play-bar-btn' onClick={(e) => {this.props.handleClickToShowDetail(e)}}>
//                 <img src={currentMusic.image + '?param=100y100'} alt=""/>
//                 <div className="playing-song">
//                     <h3>{currentMusic.name}</h3>
//                     <p>{currentMusic.singer}</p>
//                 </div>
//                 <div className="playing-song-btn">
//                     <div className={ songStatus.isListen ? "playing-song-pause" : "playing-song-listen"} onClick={(e) => {this.props.handleClickToPause(e)}}></div>
//                     <div className="playing-song-list-btn" onClick={(e) => {this.props.handleClickToList(e)}}></div>
//                 </div>
//             </div>
//         )
//     }
// }

const PlayBarBtn=(props)=>{
    const { currentMusic, songStatus,handleClickToList,handleClickToShowDetail,handleClickToPause } = this.props;
    return (
        <div className='play-bar-btn' onClick={handleClickToShowDetail}>
            <img src={currentMusic.image + '?param=100y100'} alt=""/>
            <div className="playing-song">
                <h3>{currentMusic.name}</h3>
                <p>{currentMusic.singer}</p>
            </div>
            <div className="playing-song-btn">
                <div className={ songStatus.isListen ? "playing-song-pause" : "playing-song-listen"} onClick={handleClickToPause}></div>
                <div className="playing-song-list-btn" onClick={handleClickToList}></div>
            </div>
        </div>
    )
}
export default React.memo(PlayBarBtn)