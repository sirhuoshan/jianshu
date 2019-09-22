import React,{Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper,TopicItem} from '../style'

class Topic extends Component{
    render(){
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return <TopicItem key={item.get('id')}>
                            <img className="topic-pic"
                                 src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                            {item.get('title')}
                        </TopicItem>
                    })
                }

            </TopicWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        topicList:state.getIn(['home','topicList'])
    }
}

export default connect(mapState,null)(Topic);