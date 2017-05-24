/**
 * Created by Think on 2017/5/24.
 */
require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React, { Component } from "react";
import InsureInfo from './insureInfo';
import InsureList from './insureList';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';


class App extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Router>
                <div>

                    <Route exact path="/" render= {()=>{
                        return(
                             <ul>
                                <li><Link to="/insurelist">insure InsureList</Link></li>
                             </ul>
                        )
                    }}/>
                    <Route exact path="/insurelist" component={InsureList}/>
                    <Route exact path="/insurelist/:id" component={InsureInfo}/>
                </div>
            </Router>
        )

    }

}

export default App;