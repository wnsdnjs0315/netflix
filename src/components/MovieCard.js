import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {
  let navigate = useNavigate();
    const { genreList  } = useSelector(state=>state.movie)
  return (
    <div className='card-group' onClick={()=>navigate(`/tv/${item.id}`)}>
        <div
        className="card"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +
            ")",
        }}
      >
            <div className="card-overlay">
                <h1>{item.original_name}</h1>
                <div className='genre'>
                    {item.genre_ids.map((id,idx)=>
                        <Badge bg="danger" key={idx}>
                            {genreList.find(item=>item.id==id).name}
                        </Badge>
                    )}
                    {/* {item.genre_ids} */}
                </div>
                <div className='vote-group'>
                    <span className='vote-average'>{item.vote_average}</span>
                    <span className='adult-info'>{item.adult? "성인":"전체이용"}</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default MovieCard