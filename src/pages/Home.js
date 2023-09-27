import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector((state)=> state.movie)
  console.log(popularMovies)

  useEffect(() => {
    dispatch(movieAction.getMovies())
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Banner movie={topRatedMovies.results[17]} />
      <div className='contents'>
          <h2>What's Popular</h2>
          <MovieSlide movie={popularMovies}/>
          <h2>Top Rated Movies</h2>
          <MovieSlide movie={topRatedMovies}/>
          <h2>Upcoming Movies</h2>
          <MovieSlide movie={upcomingMovies}/>
      </div>  
    </div>
  )
}

export default Home