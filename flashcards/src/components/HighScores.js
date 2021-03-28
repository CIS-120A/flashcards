import React, { useState } from 'react';
import { connect } from "react-redux";

function HighScores ({ data, match }) {

    let id = match.params.id
    const [scores, setScores] = useState(data);

        return (
            <div className='hs_container'>
                <h1>Chapter {id} High Scores</h1>
                {scores.map(arr => {
                    return (
                        <div className='score_holder'>
                            <p>{arr.name}</p>
                            <p className='high_score'>{arr.score}</p>
                        </div>
                    )
                })}
            </div>
        )
}

function mapStateToProps(state) {
    return {
        data: state.chap_high_score
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps,mapDispatchToProps)(HighScores)