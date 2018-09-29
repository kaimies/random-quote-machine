import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import RandomQuoteMachine from './RandomQuoteMachine';

library.add(faQuoteLeft, fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomQuoteMachine />
      </div>
    );
  }
}

export default App;
