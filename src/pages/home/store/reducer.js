import * as actionTypes from './actionTypes';
import {fromJS} from  'immutable';

const defaultState = fromJS({
    topicList:[],
    contentList:[],
    contentPage:0,
    showScroll:false
});

export default (state=defaultState,action) => {
    switch (action.type){
        case actionTypes.HOME_LIST:
            return state.merge(
                {
                    topicList:action.data.get('topicList'),
                    contentList:action.data.get('contentList')
                }
            )
        case actionTypes.MORE_LIST:
            return state.merge(
                {
                    contentPage:action.contentPage+1,
                    contentList:state.get('contentList').concat(action.data.get('contentList'))
                }
            )
        case actionTypes.TOP_SHOW:
            return state.set('showScroll',action.data);
        default:
            return state;
    }
}

