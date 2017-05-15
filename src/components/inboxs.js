require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Link,browserHistory } from 'react-router';
import NavLink from './navLink';


class Inboxs extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const path = `/inboxs/${userName}/${password}`;
    browserHistory.push(path);

  }
  render() {
    return (
      <div>
        <div>inboxs</div>
        <ul>
          <li><NavLink to="/inboxs/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/inboxs/facebook/react">React</NavLink></li>
        </ul>
        
        <li>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/>
            <input type="text" placeholder="password"/>
            <button type="submit">Go</button>
          </form>
        </li>
        
        
        {this.props.children}
      </div>
    );
  }
}

export default Inboxs;
