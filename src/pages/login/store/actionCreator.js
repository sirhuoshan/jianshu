import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable'


export const loginSucc =()=>({
    type:actionTypes.LOGIN_SUCC,
    data:true
});
export const logout = ()=>({
    type:actionTypes.LOGIN_OUT,
    data:false
})

export const login = (account,password)=>{
    return (dispatch)=>{
        axios.get('api/login.json?account='+account+"&password"+password).then((res)=>{
            const login_status = res.data.data
            if(login_status){
                dispatch(loginSucc());
            }else {

            }

        }).catch(()=>{})

    }
}