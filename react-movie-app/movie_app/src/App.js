import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types"

class App extends React.Component {
  state = {
    isLoading: true, 
    movies: []
  };

  // axios는 느리기 때문에 비동기로 만들어줄 필ㅇ가 있다. async -> await
  getMovies = async() => {
    const { // es6 syntax
      data: { // 이렇게 나타내는건 console을 찍어보고 어느 지점에서 movie data가 있는지 확인하고 한것
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies); 
    this.setState({ movies, isLoading : false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state; // es6 문법
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;

