import React from 'react';

import './style.scss';

const SearchHotWord=(props)=>{
    let {handleToClickHot,songHot}=props;
    return (
        <div className='search-hot-word'>
            <h5>热门搜索</h5>
            {
                songHot.map((item, index) => {
                    return (
                        <div className="search-hot-keyword" key={index} onClick={handleToClickHot}>
                            <div className="search-keyword-item">{item.first}</div>
                        </div>
                    );
                })
            }
            
        </div>
    );
}





export default React.memo(SearchHotWord);