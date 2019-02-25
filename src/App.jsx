import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT'
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleOnClick()}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

// Our goal is to:
// 1. Only re-render our App component when specific changes to state occur
// 2. Only provide the slice of state that we need to our App component
// We need :
// 1. A function that listens to every change in the store - connect listens to each change in state that occurs.
// 2. Filters out the changes relevant to a particular component - When a change occurs. the connect function calls a function mapStateTopProps we specify exactly which slice of the state we want to provide to our component  (i.e. state.items)
// 3. Provide to that component - then we specify which component we are providing to i.e. App as in connect(mapStateToProps)(App). FInally the entire connect() method returns a new component and this is the component we wish to export

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
