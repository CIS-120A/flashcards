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

    const clickHandler = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
        if (counter === flashCards.length - 1) {
            setCounter(0)
        }
    };

    const click_flip = (e) => {
        e.preventDefault();
        setFlipped(!flipped)
    };

    const click_random = (e) => {
      e.preventDefault();
      setCounter(Math.floor(Math.random() * Math.floor(flashCards.length)));
    };

    if (!flashCards) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <h1 onClick={click_flip}>{flipped ? flashCards[counter].definition : flashCards[counter].term}</h1>
                <button onClick={clickHandler}>Next</button>
                <button onClick={click_random}>Random</button>
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