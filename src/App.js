import './App.css';

import React, { Component } from 'react'
import MouseTracker from './Component/MouseTracker';
import Cat from './Component/Cat';
import MouseWithTracker from './Component/MouseWithCat';
import UserPropTypes from './Component/UserPropTypes';
import SampleHook from './Component/FComponents/SampleHook';

export class App extends Component {

  render() {
    return (
      <div>
        <SampleHook />
      </div>
    )
  }
}

export default App


