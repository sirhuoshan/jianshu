import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store'
import {Link} from 'react-router-dom';
import {ListItem,ListInfo,LoadMore} from '../style';

class List extends Component{
    render(){
        const {contentList,getMoreList,page}  = this.props;
        return(
            <div>
                {
                    contentList.map((item,index)=>{
                        return  (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem>
                                    <img className="pic" src = "//upload-images.jianshu.io/upload_images/2582479-6ecef2d24152d4bf?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        contentList:state.getIn(['home','contentList']),
        page:state.getIn(['home','contentPage'])
    }
}
const mapDispatchToProps = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);