import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from  'immutable';


export const detail = (data)=>({
    type:actionTypes.CONTENT_DETAIL,
    data:fromJS(data)
});


export const getDetail = (id)=>{
    return(dispatch)=>{
        axios.get("/api/detail.json?"+id).then((res)=>{
            const data = res.data.data;
            dispatch(detail(data));
        }).catch(()=>{

        })
    }
}