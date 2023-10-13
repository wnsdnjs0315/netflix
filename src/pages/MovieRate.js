import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Loading from '../components/Loading';
import MovieCard2 from '../components/MovieCard2';

const MovieRate = () => {
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
      <h1 className='rate_title'>Top Rate Tv Series</h1>
      <div className='rate_contents'>
        <MovieCard2 item={topRated.results[0]} />
        <MovieCard2 item={topRated.results[1]} />
        <MovieCard2 item={topRated.results[2]} />
        <MovieCard2 item={topRated.results[3]} />
        <MovieCard2 item={topRated.results[4]} />
        <MovieCard2 item={topRated.results[5]} />
        <MovieCard2 item={topRated.results[6]} />
        <MovieCard2 item={topRated.results[7]} />
        <MovieCard2 item={topRated.results[8]} />
        <MovieCard2 item={topRated.results[9]} />
      </div>
    </div>
)}

export default MovieRate