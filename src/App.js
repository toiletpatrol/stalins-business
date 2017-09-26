import React, { Component } from 'react';
import ReactGA from 'react-ga';
import generate from './generate.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = { title: generate(), stack: [] };
    this.handleOnClickNext = this.handleOnClickNext.bind(this);
    this.handleOnClickPrev = this.handleOnClickPrev.bind(this);
  }

  componentDidMount() {
    ReactGA.initialize('UA-107082021-1');
    ReactGA.pageview(window.location.pathname);
  }

  handleOnClickNext() {
    let title = generate();
    let stack = this.state.stack.slice();

    stack.push(this.state.title);

    document.title = title;
    this.setState({ title, stack });
  }

  handleOnClickPrev() {
    let stack = this.state.stack.slice();
    let title = stack.pop();

    document.title = title;
    this.setState({ title, stack });
  }
  render() {
    let list = [];

    for (let i = this.state.stack.length - 1; i >= 0; i--) {
      list.push(<p key={i}>{this.state.stack[i]}</p>);
    }

    return (
      <div className="App">
        <button onClick={this.handleOnClickNext}>New one</button>
        <h1>{this.state.title}</h1>
        {list}
      </div>
    );
  }
}

// adj + noun
// noun of noun
export default App;
