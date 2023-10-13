import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Loading from '../components/Loading';
import MovieCard2 from '../components/MovieCard2';

const MovieToday = () => {
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
      <div className='today_contents'>
        <MovieCard2 item={airingToday.results[0]} />
        <MovieCard2 item={airingToday.results[1]} />
        <MovieCard2 item={airingToday.results[2]} />
        <MovieCard2 item={airingToday.results[3]} />
        <MovieCard2 item={airingToday.results[4]} />
        <MovieCard2 item={airingToday.results[5]} />
        <MovieCard2 item={airingToday.results[6]} />
        <MovieCard2 item={airingToday.results[7]} />
        <MovieCard2 item={airingToday.results[8]} />
        <MovieCard2 item={airingToday.results[9]} />
      </div>
    </div>
)}

export default MovieToday