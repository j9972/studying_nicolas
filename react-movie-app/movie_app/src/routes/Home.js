import React from 'react';
import axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies); 
    this.setState({ movies, isLoading : false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; // es6 문법
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading... </span>
          </div>
          ) : (
            <div className="movies">
              {            
              movies.map(movie => ( 
                <Movie 
                  key={movie.id}  
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />        
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default Home; // App 일수있음 에러 대비