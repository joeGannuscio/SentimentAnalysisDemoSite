import React from 'react';
import './App.css';
import PredictSentiment from './PredictSentiment';

class App extends React.Component {
  render() {
    return (
      <div className="App container col-6">
        <h1>Sentiment Analysis Demo</h1>
        <p>Input some text and see how the model classifies it</p>
        <PredictSentiment />
      </div>
    )
  }
}

export default App;
