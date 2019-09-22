import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {actionCreators} from './store';
import {LoginWrapper,LoginBox,Input,Button} from './style';

class Login extends PureComponent{
    render(){
        if(!this.props.loginStates)
            return(
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                            <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                            <Button onClick={()=>this.props.login(this.account, this.password)}>登录</Button>
                        </LoginBox>
                    </LoginWrapper>
            )
        else
            return <Redirect to="/"></Redirect>
    }
}

const mapDispatchToProps = (dispatch)=>({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    }
})

const mapStateToProps = (state)=>{
    return{
        loginStates:state.getIn(['login','login'])
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);