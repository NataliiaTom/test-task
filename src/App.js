import './App.css';
import React, { Component } from 'react';
import { Conversion } from './Сonversion';

class App extends Component {
  state = { data: {} };

  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&base_currency=${process.env.REACT_APP_API_BASE_CURRENCY}`,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Currency rate for today </h1>
          <p>1 UAH = {this.state.data.USD} USD</p>
          <p>1 UAH ={this.state.data.EUR} EUR</p>
        </header>
        <Conversion data={this.state.data} />
      </div>
    );
  }
}

export default App;
