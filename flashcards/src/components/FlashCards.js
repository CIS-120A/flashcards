import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {set_score} from "../Redux/Actions";

const FlashCard_Study = ({data, history, match, set_score }) => {

    let id = match.params.id
    const [start, setStart] = useState(true)
    const [flipped, setFlipped] = useState(false);
    const [flashCards, setFlashCards] = useState(data);
    const [term, setTerm] = useState(0);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0)
    const [card, setCard] = useState({
        term: "",
        definition: "",
        list: []
    })


    const start_game = () => {
        if (counter  === data.length) {
            set_score(score)
            return history.push(`/score/${id}`)
        }

        if (term + 3 >= data.length) {
            setTerm(0)
        }

        setCard({
            term: data[counter].term,
            definition: data[counter].definition,
            list: [data[counter].definition,
                data[Math.floor(Math.random() * Math.floor(data.length))].definition,
                data[Math.floor(Math.random() * Math.floor(data.length))].definition,
                data[Math.floor(Math.random() * Math.floor(data.length))].definition
            ]
        })
        setTerm(term + 1);
        setCounter(counter + 1);
    };

    const clickHandler = (e) => {
        e.preventDefault()
        start_game()
        setStart(!start)
    };

    const user_select = (e) => {

        if (e.target.textContent === card.definition) {
            e.target.className = 'right'
            setScore(score + 1);
        } else if (e.target.textContent !== card.definition) {
            e.target.className = 'wrong';
        }
        console.log(score)
        setTimeout(() => {
            e.target.className = "";
            start_game()
        },1000)

    }

    if (!flashCards) {
        return <h1>Loading...</h1>
    } else if (start) {
        return (
            <div className='start_container'>
                <p>stuff and things</p>
                <p>stuff and things</p>
                <p>stuff and things</p>
                <p>stuff and things</p>
                <button className='start_btn' onClick={clickHandler}>Start</button>
            </div>
        )
    } else {
        card.list.sort()
        return (
            <div>
                {/*<h1>{flipped ? flashCards[term].definition : flashCards[term].term}</h1>*/}
                <h1>{card.term}</h1>
                    {card.list.map((arr, index) => {

                        return (
                            <div
                               id={index}
                               className='options_select'
                               onClick={user_select}>
                               <p>{arr}</p>
                            </div>
                        )
                    })}
                <p className='score'>current score</p>
                <p className='score'>{score}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.card_list
    }
}

const mapDispatchToProps = {
    set_score
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard_Study);