import axios from "axios";

export const SORT_CHAPTERS = "SORT_CHAPTERS";
export const GET_CHAPTER = "GET_CHAPTER";
export const SET_SCORE = "SET_SCORE"

function sortChapters() {
    console.log('axios')
    return dispatch => {

        let chapterOne = [];
        let chapterTwo = [];
        let chapterThree = [];
        let chapterFour = [];
        let chapterFive = [];

        axios.get('http://localhost:5000/chapter')
            .then(res => {

                res.data.map(arr => {
                    if (arr.chapter ===1) {
                        chapterOne.push(arr)
                    }
                    if (arr.chapter === 2) {
                        chapterTwo.push(arr)
                    }
                    if (arr.chapterThree === 3) {
                        chapterThree.push(arr)
                    }
                    if (arr.chapterFour === 4) {
                        chapterFour.push(arr)
                    }
                    if (arr.chapterFive === 5) {
                        chapterFive.push(arr)
                    }
                })
                dispatch({ type: SORT_CHAPTERS, payload: {
                    chapterOne,
                    chapterTwo,
                    chapterThree,
                    chapterFour,
                    chapterFive
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

        // insert axios call to save score and return list of high scores

        dispatch({
            type: SET_SCORE, payload: {
                num
            }
        })
    }
}

export {
    sortChapters,
    get_chapter,
    set_score
}