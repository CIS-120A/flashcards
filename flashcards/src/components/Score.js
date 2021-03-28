import React, { useState } from 'react';
import { get_score, post_score } from "../Redux/Actions";
import { connect } from "react-redux";

function Scores({ match, post_score, history, get_score }) {

    let chapter = match.params.id;
    const [user, setUser] = useState({
        name: "",
        chapter: Number(chapter),
        score: history.location.state.current_score
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
            get_score(chapter)
            setTimeout(() => {
                history.push({
                    pathname: `/high_score/${chapter}`,
                    state: { data: user}
                });
            },2000);
    }

    if (!user.score) {
        return (
            <h1>Loading</h1>
        )
    } else
    return (
        <div className='score_container'>
            <p>{user.score > 20 ? "Great Job":"Better Luck next Time"}</p>
            <h1>{user.score}</h1>
            <input type='text'
                   name='name'
                   placeholder='Enter Name'
                   value={user.name}
                   onChange={changeHandler} />
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
    get_score
};

export default connect(mapStateToProps,mapDispatchToProps)(Scores)