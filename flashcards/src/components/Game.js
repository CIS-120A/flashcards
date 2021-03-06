import React, { useState } from 'react';
import { post_score, set_score } from "../Redux/Actions";
import { connect } from "react-redux";

function Game({ data, history, match }) {

    const id = match.params.id;

    const [score, setScore] = useState(0);
    const [counter, setCounter] = useState(0);

    const click_handler = (e) => {

        if (counter === data.length - 1) {
            if (e.target.textContent === data[counter].definition) {
                setScore(score + 1)
                setCounter(0)
            }
            post_score(score + 1);
                history.push({
                    pathname: `/score/${id}`,
                    state: { current_score: score + 1}
                })
        }

        if (counter < data.length - 1) {
            if (e.target.textContent === data[counter].definition) {
                setScore(score + 1);
                setCounter(counter + 1)
            } else {
                setCounter(counter + 1)
            }
        }
    }

    return (
        <div>
            <h1>{data[counter].term}</h1>
            {data[counter].list.map((arr) => {

                return (
                    <div onClick={click_handler}>
                        <p>{arr}</p>
                    </div>
                )
            })}

            <h3>{score}</h3>
    </div>
    )

}

function mapStateToProps(state) {
    return {
        data: state.card_list
    }
}

const mapDispatchToProps = {
    set_score
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);


//TODO below is the code for color change on select from user

// if (e.target.textContent === card.definition) {
//     e.target.className = 'right'
//     setScore(score + 1);
//     if (counter  === data.length) {
//         set_score(score)
//         return history.push(`/score/${id}`)
//     }
// } else if (e.target.textContent !== card.definition) {
//     e.target.className = 'wrong';
//     if (counter  === data.length) {
//         set_score(score)
//         return history.push(`/score/${id}`)
//     }
// }