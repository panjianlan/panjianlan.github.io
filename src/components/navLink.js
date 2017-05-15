
require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React from 'react';
import {Router, Route, Link} from 'react-router';


class NavLink extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    )
  }
}

export default NavLink;
