/**
 * Created by Think on 2017/5/18.
 */
require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React from 'react';

const header = () => <h2>保险详情</h2>


class InsureInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>保险详情</div>
        );
    }
}
export default InsureInfo;