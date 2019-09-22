import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store'
import {DetailWrapper,Header,SubTitle,Content} from "./style";


class Detail extends Component{
    render(){
        const {title,subtitle,content} = this.props;
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <SubTitle>{subtitle}</SubTitle>
                <Content  dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getDetail(id){
            dispatch(actionCreators.getDetail(id));
        }
    }
}

const mapStateToProps = (state) => {
    return{
        title:state.getIn(['detail','title']),
        subtitle:state.getIn(['detail','subtitle']),
        content:state.getIn(['detail','content'])
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));