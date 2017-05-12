require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('./yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <ul>
          <li>11</li>
          <li>22</li>
          <li>33</li>
        </ul>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
