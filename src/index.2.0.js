/*import 'core-js/fn/object/assign';*/
import React from 'react';
import ReactDOM from 'react-dom';
/*
import Insure from './components/insureList';
*/
import App from './components/app';
import About from './components/about';
import Inboxs from './components/inboxs';
import Inbox from './components/inbox';
import Home from './components/home';
import $ from 'jquery';
import { Router, Route, Link, hashHistory,IndexRoute,browserHistory } from 'react-router'
// Render the main component into the dom
//ReactDOM.render(<Insure />, document.getElementById('app'));
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/inboxs" component={Inboxs}>
                <Route path="/inboxs/:ad/:inboxName" component={Inbox}/>
             </Route>

        </Route>

    </Router>
),document.getElementById('app'));