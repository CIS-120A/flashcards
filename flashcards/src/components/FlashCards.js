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
        if (counter + 1 === data.length) {
            set_score(score)
            history.push(`/score/${id}`)
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
        }

        if (e.target.textContent !== card.definition) {
            e.target.className = 'wrong';
        }
        setTimeout(() => {
            e.target.className = "";
            start_game()
        },10)

    }

    const handleFlip = () => {
        setFlipped(!flipped)
    }

    const submit_handler = (e) => {
        console.log(e.target.value)
    }

    if (!flashCards) {
        return <h1>Loading...</h1>
    } else if (start) {
        return (
            <div>
                <button onClick={clickHandler}>Start</button>
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
                               value={arr}
                               onClick={user_select}>
                                <p>{arr}</p>
                            </div>
                        )
                    })}
                <p>{score}</p>
                    <button onClick={submit_handler}>Submit</button>
                {/*<button onClick={handleFlip}>Flip Card</button>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        one: state.one,
        two: state.two,
        three: state.three,
        four: state.four,
        five: state.five,
        data: state.card_list
    }
}

const mapDispatchToProps = {
    set_score
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard_Study);