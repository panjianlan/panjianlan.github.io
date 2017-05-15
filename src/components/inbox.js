require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class Inbox extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>{ this.props.params.inboxName }</div>
    );
  }
}

export default Inbox;
