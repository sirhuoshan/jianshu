import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    padding-right:70px;
    box-sizing:border-box;
    height:100%;
    margin:0 auto;
`


export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    
    &.active{
        color:#ea6f5a;
    } 
`

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;    
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;//不备padding撑开
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;    
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
       width:160px;
    }
`

export const Addtion = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`

export const Button = styled.button`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`

export const SearchInfo = styled.div`
    background:#fff;
    position:absolute;
    left:0px;
    top:56px;
    width:240px;
    padding 0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    cursor:pointer;
`

export const SearchInfoTitle = styled.div `
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInfoSwitch = styled.div `
    float:right;
    font-size:13px;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;   
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`

export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a `
    line-height:20px;
    float:left;
    border:1px solid #ddd;
    padding:0 5px;
    font-size:12px;
    color:#333;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:15px;
    cursor:pointer;
`
