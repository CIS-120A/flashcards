import axios from "axios";

export const SORT_CHAPTERS = "SORT_CHAPTERS";
export const GET_CHAPTER = "GET_CHAPTER";
export const SET_SCORE = "SET_SCORE";
export const POST_SCORE = "POST_SCORE";
export const GET_SCORE = "GET_SCORE";

function sortChapters() {
    console.log('axios')
    return dispatch => {

        axios.get('http://localhost:5000/chapter')
            .then(res => {
                console.log(res.data)
                dispatch({ type: SORT_CHAPTERS, payload: {
                    data: res.data
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

function get_chapter(id) {
    return dispatch => {

        axios.get(`http://localhost:5000/chapter/${id}`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_CHAPTER, payload: {
                        data: res.data
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

function set_score(num) {

    return dispatch => {
        dispatch({
            type: SET_SCORE, payload: {
                data: num
            }
        })
    }
}

function post_score(num) {
    console.log(num)
        return dispatch => {
            axios.post('http://localhost:5000/score', num)
                .then(res => {
                    dispatch({ type: POST_SCORE })
                })
                .catch(err => {
                    console.log(err)
                })
        }
}

export function thunk_scores(id) {
    console.log(`this is line 100 ${id}`)
    return dispatch => {
        dispatch(get_score(id))
    }
}

function get_score(id) {

    return (dispatch) => {

       axios.get(`http://localhost:5000/score/${id}`)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: GET_SCORE, payload: {
                        scores: res.data
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        }
}

export {
    sortChapters,
    get_chapter,
    set_score,
    post_score,
    get_score
}