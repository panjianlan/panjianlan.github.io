/**
 * Created by Think on 2017/5/18.
 */
require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React from 'react';
import {
    Link,
    Redirect
} from 'react-router-dom'
import InsureList from './insureList.js';


const Header = () => {
    return(
        <div>
            <div>
                <h2><Link to="/insurelist"><button>返回</button></Link>保险详情</h2>
            </div>
        </div>
    )
}
const Banner = ({photoUrl}) => {
    return(
        <div>
            <img style={{width:'100%'}} src={`/${photoUrl}`} alt=""/>
        </div>
    )
}

const Selected = ({fee,...rest}) => {
    return(
        <div className="selectedDiv">
            <h3>保险</h3>
            <h3 className="red">${fee}</h3>
            <p>保期：{rest.expireDate}</p>
            <div>
                <p className="infotitle">被保人户籍地址(<i className="red">不支持农业户口投保</i>)</p>
                <div className="linkGroup clearfix">
                    <a className = "link" href="javascript:void(0);" data-name="洮北区">洮北区(非农)</a>
                    <a className = "link" href="javascript:void(0);" data-name="大安市">大安市(非农)</a>
                    <a className = "link" href="javascript:void(0);" data-name="通榆县">通榆县(非农)</a>
                    <a className = "link" href="javascript:void(0);" data-name="洮南市">洮南市(非农)</a>
                    <a className = "link" href="javascript:void(0);" data-name="镇赉县">镇赉县(非农)</a>
                    <a className = "link" href="javascript:void(0);" data-name="市直属">市直属(非农)</a>
                </div>
            </div>
            <div>
                <span className="red">${fee}</span><span>下一步</span>
            </div>
        </div>
    )
}


class InsureInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            insureInfo:this.props.location.query?this.props.location.query:{}
        }
    }
    render(){
        var insureInfo = this.state.insureInfo;
        return (
            <div>
                <Header/>
                <Banner photoUrl= {insureInfo.photoUrl}/>
                <Selected fee={insureInfo.fee} name={insureInfo.name} expireDate={insureInfo.expireDate}/>
            </div>
        );
    }
}
export default InsureInfo;