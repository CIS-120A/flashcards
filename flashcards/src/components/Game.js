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
                e.target.className = 'right'
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
                console.log(e.target)
                e.target.textContent = "Correct"
                e.target.style = 'background-color: #5cb85c'
                setScore(score + 1);
                setTimeout(() => {
                    setCounter(counter + 1);
                    e.target.style = ''
                },1500)
            } else {
                e.target.textContent = "Wrong"
                e.target.style = 'background-color: #d9534f'
                setTimeout(() => {
                    setCounter(counter + 1);
                    e.target.style = ''
                },1000)
            }
        }
    }

    const click_home = (e) => {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className='game_container'>
            <button className='home_btn' onClick={click_home}><ion-icon name="home-outline"></ion-icon></button>
            <h1 className="capitalize">{data[counter].term}</h1>
            {data[counter].list.map((arr) => {

                return (
                    <div onClick={click_handler}>
                        <p>{arr}</p>
                    </div>
                )
            })}
            <h2>Score</h2>
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