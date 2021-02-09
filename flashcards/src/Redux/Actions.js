import axios from "axios";

export const SORT_CHAPTERS = "SORT_CHAPTERS";

export function sortChapters() {
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