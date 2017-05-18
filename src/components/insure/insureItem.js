/**
 * Created by Think on 2017/5/11.
 */

import React from 'react';
import {isEqual,timestringToDate} from './util';
class InsureItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var displayshow = timestringToDate(this.props.item.expireDate)?'display:block':'display:none'//this.props.item.expireDate
        return (
            <div className="productDo">
                <img className="imgDo" src={this.props.item.photoUrl} alt=""/>
                <div className="productName padding-lf-10 clearfix"  data-img={this.props.item.name}><h3 className={(timestringToDate(this.props.item.expireDate)?'fl padding-r-10  color999':'fl padding-r-10')}>{this.props.item.name}</h3><span className="fl closeBtn bggray" style={{display: (timestringToDate(this.props.item.expireDate)?'block':'none')}}>已关闭</span><span className={(timestringToDate(this.props.item.expireDate)?'fr red color999':'fr red')}>{this.props.item.fee}</span></div>
            </div>

        );
    }
}

export default InsureItem;