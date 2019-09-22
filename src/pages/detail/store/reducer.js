import * as actionTypes from './actionTypes';
import {fromJS} from  'immutable';

const defaultState = fromJS({
   title:'',
   subtitle:'',
   content:'',
});

export default (state=defaultState,action) => {
    switch (action.type){
        case actionTypes.CONTENT_DETAIL:
            return state.merge({
                        "title":action.data.get('title'),
                        "subtitle":action.data.get('subtitle'),
                        "content":action.data.get('content')
                    });
        default:
            return state;
    }
}

