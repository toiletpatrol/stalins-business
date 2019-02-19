import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import generate from './generate.js';
import './App.css';

export class App extends PureComponent {
  state = { title: generate(), stack: [] };

  componentDidMount() {
    ReactGA.initialize('UA-107082021-1');
    ReactGA.pageview(window.location.pathname);
  }

  handleOnClickNext = () => {
    let title = generate();
    let stack = this.state.stack.slice();

    stack.push(this.state.title);

    document.title = title;
    this.setState({ title, stack });
  };

  render() {
    return (
      <div className="App">
        {/* Button */}
        <button onClick={this.handleOnClickNext}>Press me</button>

        {/* Title */}
        <h1 className="animated">{this.state.title}</h1>

        {/* List */}
        {this.state.stack.map((title, i) => <p key={i}>{title}</p>)}
      </div>
    );
  }
}

// adj + noun
// noun of noun
export default App;
