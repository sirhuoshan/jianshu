import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from "./components/Topic";
import List  from './components/List';
import Recommend from './components/Recommend';

class Home extends Component{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        const {showScroll} = this.props;
        console.log(showScroll);
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic></Topic>
                    <List/>
                </HomeLeft>

                <HomeRight>
                    <Recommend/>
                </HomeRight>
                { showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> :""}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getHomeList();
        this.bindEvent();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state)=>{
    return{
        showScroll:state.getIn(['home','showScroll'])
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        getHomeList(){
            dispatch(actionCreators.getHomeList());
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop > 400){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false));
            }
        }

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Home);