import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './styles/styles.css';

import ButtonAppBar from './components/appBar';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar/>
      </div>
    );
  }
}

export default App;
