/**
 * Created by Think on 2017/6/7.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import {InsureList} from '../components/insure/insureList';


const getData = (datalist,status) => {
    switch (status){
        case "GETPRODUCTLIST":
            return datalist;
        case "SELECT":
            return null;
        default :
            return datalist;

    }
}
const mapStateToProps = state => {
    return ({
        datalist:state.datalist
    })
}



const showlist =  connect(
    mapStateToProps
)(InsureList)

export default showlist;