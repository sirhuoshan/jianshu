import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defalutState = fromJS({
    login:false
})

export default (state = defalutState,action)=>{
    switch (action.type){
        case actionTypes.LOGIN_SUCC:
            return state.set('login',true);
        case actionTypes.LOGIN_OUT:
            return state.set('login',false);
        default:
            return state
    }
}