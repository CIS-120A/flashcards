import React, { useState } from 'react';
import { connect } from 'react-redux';

const FlashCard_Study = ({ data, history, match }) => {

//TODO see if nav needs history or match

    const [flipped, setFlipped] = useState(false);
    const [flashCards, setFlashCards] = useState(data);
    const [counter, setCounter] = useState(0);

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
            <div className='fc_container'>
                <div className='flashcards'>
                <h1 onClick={click_flip}>{flipped ? flashCards[counter].definition : flashCards[counter].term}</h1>
                <button onClick={clickHandler}>Next</button>
                <button onClick={click_random}>Random</button>
                </div>
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

};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard_Study);