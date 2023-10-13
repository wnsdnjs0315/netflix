import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const {airingToday, topRated, popular, loading} = useSelector((state)=> state.movie)
  console.log(airingToday)

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
      <Banner movie={topRated.results[0]} />
      <div className='contents'>
          <Link to='/today'>
            <h2>Airing Today</h2>
          </Link>
          <MovieSlide movie={airingToday}/>
          <Link to='/tvrate'>
            <h2>Top Rated</h2>
          </Link>
          <MovieSlide movie={topRated}/>
          <Link to='/popular'>
            <h2>Popular</h2>
          </Link>
          <MovieSlide movie={popular}/>
      </div>  
    </div>
  )
}

export default Home