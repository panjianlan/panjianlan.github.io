require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React from 'react';
import InsureItem from './insureItem';
import InsureInfo from './insureInfo';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'


class InsureList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      debugger
    const { store } = this.context;
    const state = store.getState();
    var dataArr = state;
    var list = dataArr.map(function (v) {
      return (
          <li key={v.id}>
            <Link to={{pathname:`${this.props.match.path}/${v.id}`,query:v}}>
               <InsureItem item={v}/>
            </Link>
          </li>
      );
    }.bind(this));

    return (
        <div>
            <ul>
              {list}
            </ul>
        </div>
    )
  }
}
InsureList.contextTypes = {
    store: React.PropTypes.object
}

export default InsureList;
