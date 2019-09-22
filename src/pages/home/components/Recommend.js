import React,{Component} from 'react';
import {RecommendWrapper,RecommendItem} from '../style';

class Recommend extends Component{
    render(){
        return(
            <RecommendWrapper>
                <RecommendItem imgUrl="http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"/>
                <RecommendItem imgUrl="http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"/>
            </RecommendWrapper>
        )
    }
}

export default Recommend;