import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

class Hello extends Component {
  render() { return <div>hello</div> }
}

class Goodbye extends Component {
  render() { return <div>goodbye</div> }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
            <main role="main" className="container">
              <div className="content">
                <Route path="/h" component={Hello} />
                <Route path="/g" component={Goodbye} />
              </div>
            </main>
        </BrowserRouter>
      </div>
    );
  }
}
