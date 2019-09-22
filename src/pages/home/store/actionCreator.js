import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from  'immutable';

export const getList = (data)=>({
    type:actionTypes.HOME_LIST,
    data:fromJS(data),
})

export const moreList = (data,page)=>({
    type:actionTypes.MORE_LIST,
    data:fromJS(data),
    contentPage:page
})

export const toggleTopShow = (show)=>({
    type:actionTypes.TOP_SHOW,
    data:show
})

export const getHomeList = ()=>{
    return (dispatch)=>{
        axios.get("/api/homeList.json").then((res)=>{
            const data = res.data;
            dispatch(getList(data.data));
        }).catch(()=>{

        })
    };
}

export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get("/api/moreList.json?"+page).then((res)=>{
            const data = res.data.data;
            dispatch(moreList(data,page));
        }).catch(()=>{

        })
    }
}

