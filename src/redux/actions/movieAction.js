
import api from '../api.js';

/* 
    리덕스 미들웨어
    =두전째 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
    - 리덕스 미들웨어는 액션과 리듀서 사이의 중간다
    - [액션]  [미들웨어] - [리듀서] - [스토어]
    - 비동기 처리 작읍을 간편하게 가능

*/

const API_KEY=process.env.REACT_APP_API_KEY


function getMovies() {
    return async(dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})

            const airingTodayApi = api.get(`/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const popularApi = api.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)

            /* 장르 정보를 요청하는 api */
            const genreApi = api.get(`/genre/tv/list?api_key=${API_KEY}&language=en-US`)

            let [airingToday, topRated, popular, genreList] = await Promise.all([
                airingTodayApi, 
                topRatedApi, 
                popularApi,
                genreApi
            ]);
            //console.log("장르리스트", genreList)
    
            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    airingToday: airingToday.data,
                    topRated: topRated.data,
                    popular: popular.data,
                    genreList: genreList.data.genres
                }    
            })
            console.log("airing",airingToday)
            console.log("top",topRated)
            console.log(popular)
        } catch(error) {
            //에러 핸들링하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})

        }
    }
}

export const movieAction = {
    getMovies,
}