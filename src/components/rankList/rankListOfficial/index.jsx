import React          from 'react'
import { withRouter } from 'react-router-dom';

import './style.scss';


const rankListOfficial=(props)=>{
  let {history,rankList}=props;
  return (
    <div className='rank-list-official'>
        {
            rankList.map((item, index) => {
                return (
                    <div className="rank-official-item" key={index} onClick={() => {history.push('/playList/' + item.id)}}>
                        <img src={item.coverImgUrl + '?param=150y150'} alt=""/>
                        <div className="official-songs">
                        {
                            item.tracks.map((innerItem, innerIndex) => {
                                return (
                                    <p key={innerIndex}>{innerItem.first}-{innerItem.second}</p>
                                );
                            })
                        }
                        </div>
                        <span>{item.updateFrequency}</span>
                    </div>
                );
            })
        }
    </div>
)
}








export default withRouter(rankListOfficial);