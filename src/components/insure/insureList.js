
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
    this.state = {datalist:[]};
  }
  componentDidMount(){
    $.ajax({
      url: "",
      type: "POST",
      data: {
        assuredId: '1155826'
      },
      dataType: "json",
      success: function (result) {
        if (result.rows == null || (result.rows != null && result.rows.length == 0)) {
          return;
        }
        this.setState({
          datalist: result.rows
        });
      }.bind(this)
    });
  }

  render() {
    var dataArr = this.state.datalist;


    var list = dataArr.map(function (v) {
      return (
          <li key={v.id}><Link to={{pathname:'/insureInfo',query:v}}><InsureItem
              key={v.id}
              item={v}
              /></Link></li>
      );
    });
    return (
        <Router>
          <div>
              <Route path="/index"  render={()=>{
                return (<ul>
                  {list}
                </ul>)
              }}/>
              <Route path="/insureInfo" component={InsureInfo}/>


          </div>
        </Router>
    )
  }
}

export default InsureList;
