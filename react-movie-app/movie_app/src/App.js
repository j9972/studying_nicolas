import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component {
  state = {
    isLoading: true, 
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000); // 6초 후에 loading -> we are ready로 바뀐다. 
    // api로부터 얻은 data를 fetch한것이다.
  }
  render() {
    const {isLoading} = this.state; // es6 문법
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;

