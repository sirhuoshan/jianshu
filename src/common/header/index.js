import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store/';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom';
import {fromJS} from 'immutable';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";



class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left ">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {this.props.login?<NavItem className="right" onClick={this.props.logout}>退出</NavItem>:<Link to="/login"><NavItem className="right">登陆</NavItem></Link>}
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in ={this.props.focus}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focus?'focused':''}
                                onFocus = {()=>this.props.handleInputFocus(this.props.list)}
                                onBlur = {this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focus?'focused iconfont zoom':'iconfont zoom'} >&#xe60d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addtion>
                    <Button className="writing"><i className="iconfont">&#xe62b;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addtion>
            </HeaderWrapper>
        )
    }

    getListArea(){
        const {focus,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const pageList = [];
        const newJs = list.toJS();
        for(let i=(page-1)*10;i<page*10 && i < newJs.length;i++){
            pageList.push(<SearchInfoItem key={newJs[i]}>{newJs[i]}</SearchInfoItem>);
        }

        if(focus || mouseIn){
            return(
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave = {handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=> handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        focus:state.getIn(['header','focus']),
        list:state.getIn(['header','list']),
        totalPage:state.getIn(['header','totalPage']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchTothisProps  = (dispath)=>{
    return{
        handleInputFocus(list){
            (list.size === 0) && dispath(actionCreators.getList());
            dispath(actionCreators.searchFocus());

        },
        handleInputBlur(){
            dispath(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispath(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispath(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngel = spin.style.transform.replace(/[^0-9]/ig,"");
            originAngel = originAngel == "" ? 0 : parseInt(originAngel);
            spin.style.transform = "rotate("+(originAngel+360)+"deg)";

            if(page < totalPage){
                dispath(actionCreators.changePage(page+1));
            }else{
                dispath(actionCreators.changePage(1));
            }
        },
        logout(){
            dispath(loginActionCreators.logout());
        }

    }
}
export default connect(mapStateToProps,mapDispatchTothisProps)(Header);