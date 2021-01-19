import logo from './logo.svg';
import React, { Component } from 'react';
import MovieService from './services/movie-service';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.movieService = new MovieService();
  }

  componentDidMount() {
  }

  render(){
    return(
      <p>Hola mundo</p>
    );
  }
}



export default App;
