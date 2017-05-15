
require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React from 'react';
import NavLink from './navLink';
import {Router, Route, Link, IndexLink} from 'react-router';


class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="appdiv">
        <h1>React Router Test</h1>
        <ul role="role">
          <li>
            /*<IndexLink to="/" activeClassName="active">Home</IndexLink>*/
            <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/inboxs">Inboxs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
