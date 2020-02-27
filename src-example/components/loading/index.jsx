import React from 'react';

import loading from '../../assets/loading.gif';

import './style.scss';


const Loading=()=> {
    return (
        <div className="loading">
            <img src={loading} alt=""/>
            正在加载中，请稍后...
        </div>
    );
}

export default Loading;
