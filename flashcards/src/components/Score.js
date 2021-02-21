import React, { useState } from 'react';
import {get_chapter, get_score, post_score, sortChapters, thunk_scores} from "../Redux/Actions";
import {connect} from "react-redux";

function Scores({score, match, post_score, history, get_score}) {
    let chapter = match.params.id;
    const [user, setUser] = useState({
        name: "",
        chapter: Number(chapter),
        score: score
    })

    const changeHandler = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler(e) {
            e.preventDefault();
            post_score(user);
            get_score(chapter);
            history.push(`/high_score/${chapter}`);
    }

    return (
        <div>
            <p>Your final score is....</p>
            <h1>{score}</h1>
            <input type='text' name='name' placeholder='Enter Name' value={user.name} onChange={changeHandler} />
            <button onClick={submitHandler}>Submit Score</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}

const mapDispatchToProps = {
    post_score,
    get_score,
    thunk_scores
};

export default connect(mapStateToProps,mapDispatchToProps)(Scores)