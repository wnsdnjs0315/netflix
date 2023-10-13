import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const MovieCard2 = ({item}) => {
    let navigate = useNavigate();
        const  { genreList } = useSelector(state=>state.movie)
  return (
    <div className='card2-group'>
        <div style={{
            backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.backdrop_path}` + ")"
        }} className='rate_sum'>
    
            
    
        </div>
        <div className='rate-info'>
            <h1>{item.original_name}</h1>
            <p>{item.vote_average}</p>
            <p>{item.popularity}</p>
        </div>
        <Button variant="danger"  onClick={()=>navigate(`/tv/${item.id}`)}>
            info
        </Button>
      </div>
  )
}

export default MovieCard2