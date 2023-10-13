import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Loading from '../components/Loading';
import MovieCard2 from '../components/MovieCard2';

const Popular = () => {
  const dispatch = useDispatch();
  const {airingToday, topRated, popular, loading} = useSelector((state)=> state.movie)
  console.log("air",airingToday)

  useEffect(() => {
    dispatch(movieAction.getMovies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <h1 className='popular_title'>Popular Tv Series</h1>
      <div className='popular_contents'>
        <MovieCard2 item={popular.results[0]} />
        <MovieCard2 item={popular.results[1]} />
        <MovieCard2 item={popular.results[2]} />
        <MovieCard2 item={popular.results[3]} />
        <MovieCard2 item={popular.results[4]} />
        <MovieCard2 item={popular.results[5]} />
        <MovieCard2 item={popular.results[6]} />
        <MovieCard2 item={popular.results[7]} />
        <MovieCard2 item={popular.results[8]} />
        <MovieCard2 item={popular.results[9]} />
      </div>
    </div>
)}

export default Popular