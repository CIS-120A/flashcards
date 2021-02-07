import { SORT_CHAPTERS } from "./Actions";
import {act} from "@testing-library/react";

const initialState = {
    card: []
};

export default function mainReducer( state = initialState, action) {
    switch (action.type) {
        case SORT_CHAPTERS:
            return {
                ...state,
                card: action.payload.data
            }
    }
}