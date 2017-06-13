/**
 * Created by Think on 2017/6/7.
 */
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


export const URLlinkComponet = () => {
    return (
        <ul>
            <li><Link to="/insurelist">insure InsureList</Link></li>
        </ul>
    )
}