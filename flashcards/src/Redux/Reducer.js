import { SORT_CHAPTERS, GET_CHAPTER, SET_SCORE } from "./Actions";
import {act} from "@testing-library/react";

const initialState = {
    card: [],
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    card_list: [],
    score: 0
};

export default function mainReducer( state = initialState, action) {
    switch (action.type) {
        case SORT_CHAPTERS:
            return {
                ...state,
                one: action.payload.chapterOne,
                two: action.payload.chapterTwo,
                three: action.payload.chapterThree,
                four: action.payload.chapterFour,
                five: action.payload.chapterFive
            }
        case GET_CHAPTER:
            return {
                ...state,
                card_list: action.payload.data
            }
        case SET_SCORE:
            return {
                ...state,
                score: action.payload.num
            }
        default: {
            return state
        }
    }
}