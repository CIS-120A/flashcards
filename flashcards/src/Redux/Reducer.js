import { SORT_CHAPTERS, GET_CHAPTER, SET_SCORE, POST_SCORE, GET_SCORE } from "./Actions";
import {act} from "@testing-library/react";

const initialState = {
    terms: null,
    card_list: [],
    score: 0,
    chapter_score: null
};

export default function mainReducer( state = initialState, action) {
    switch (action.type) {
        case SORT_CHAPTERS:
            return {
                ...state,
                terms: action.payload.data
            }
        case GET_CHAPTER:
            return {
                ...state,
                card_list: action.payload.data
            }
        case SET_SCORE:
            return {
                ...state,
                score: action.payload.data
            }
        case POST_SCORE:
            return {
                ...state,
            }
        case GET_SCORE:
            return {
                ...state,
                chapter_score: action.payload.scores
            }
        default: {
            return state
        }
    }
}