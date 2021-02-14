import React from 'react';
import {get_chapter, sortChapters} from "../Redux/Actions";
import {connect} from "react-redux";

function Scores({score}) {
    console.log(score)
    return (
        <div>
            <p>Your final score is....</p>
            <h1>{score}</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}

const mapDispatchToProps = {
    sortChapters,
    get_chapter
};

export default connect(mapStateToProps,mapDispatchToProps)(Scores)