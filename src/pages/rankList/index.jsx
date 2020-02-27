import React from 'react';
import axios from 'axios';

import RankListHeader from '../../components/rankList/rankListHeader/index'
import RankListOfficial from '../../components/rankList/rankListOfficial/index'
import RankListGlobal from '../../components/rankList/rankListGlobal/index'

import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';


const Home=()=>{
    let [rankList,setRankList]=useState([]);
    useEffect(()=>{
       const  receiveRankListData=()=> {
            axios.get('http://api.mtnhao.com/toplist/detail')
                 .then(res => {
                    setRankList(res.data.list)
                 })
                 .catch(err => console.log(err));
        };
        receiveRankListData();
    },[])
    return (
        <div className='rank-wrap'>
            <RankListHeader/>
            <h3>官方榜单</h3>
            <RankListOfficial rankList={rankList.slice(0, 4)}/>
            <h3>全球榜</h3>
            <RankListGlobal rankList={rankList.slice(4)}/>
        </div>
    );
}

export default Home; 