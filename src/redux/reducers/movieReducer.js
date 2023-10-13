let initialState = {
    popularMovies: [],
    topRated: [],
    popular:[],
    genreList:[],
    loading: true
}
const movieReducer = (state=initialState, action) => {
    let {type, payload} = action;

    switch(type) {
        case "GET_MOVIES_REQUEST":
            return {...state, loading: true}
        case "GET_MOVIE_SUCCESS":
            return {
                ...state, 
                airingToday: payload.airingToday,
                topRated: payload.topRated,
                popular: payload.popular,
                genreList: payload.genreList,
                loading: false,
            };
        case "GET_MOVIES_FAILURE":
            return {...state, loading: false}

            default:
                return {...state}
    }
}

export default movieReducer