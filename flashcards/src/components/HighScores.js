import React, { useState, useEffect } from 'react';
import {get_score} from "../Redux/Actions";
import {connect} from "react-redux";

function HighScores ({data, match, history, get_score}) {

    let id = match.params.id
    const [scores, setScores] = useState(data);

        return (
            <div>
                <h1>Chapter {id} High Scores</h1>
                {scores.push(history.location.state.data)}
                {scores.map(arr => {
                    return (
                        <div>
                            <p>{arr.name}</p>
                            <p>{arr.score}</p>
                        </div>
                    )
                })}
            </div>
        )
}

function mapStateToProps(state) {
    return {
        data: state.chapter_score
    }
}

const mapDispatchToProps = {
    get_score
};

export default connect(mapStateToProps,mapDispatchToProps)(HighScores)