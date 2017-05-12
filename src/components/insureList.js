
require('styles/common.css');
require('styles/insure.css')
import $ from 'jquery';
import React from 'react';
import InsureItem from './insureItem';


class InsureComponent extends React.Component {
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
          <InsureItem
              key={v.id}
              item={v}
              />
      );
    });
    return <div>{list}</div>;
  }
}

export default InsureComponent;
