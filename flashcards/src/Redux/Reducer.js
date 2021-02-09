import { SORT_CHAPTERS } from "./Actions";
import {act} from "@testing-library/react";

const initialState = {
    card: [],
    one: null,
    two: null,
    three: null,
    four: null,
    five: null
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
    }
}