import React, { useState } from 'react';
import { connect } from 'react-redux';

const FlashCard_Study = ({ data, history, match }) => {

//TODO see if nav needs history or match

    const [flipped, setFlipped] = useState(false);
    const [flashCards, setFlashCards] = useState(data);
    const [counter, setCounter] = useState(0);
    const id = match.params.id;

    const click_handler = (e) => {
        e.preventDefault()
        if (e.target.textContent === "Random") {

            if (flipped === true) {
                setFlipped(!flipped)
                setCounter(Math.floor(Math.random() * Math.floor(flashCards.length)));
            } else {
                setCounter(Math.floor(Math.random() * Math.floor(flashCards.length)));
            }
        } else if (e.target.textContent === "Next") {
            if (flipped === true) {
                setFlipped(!flipped)

                setCounter(counter + 1);
                if (counter === flashCards.length - 1) {
                    setCounter(0)
                }
            } else {
                setCounter(counter + 1);
                if (counter === flashCards.length - 1) {
                    setCounter(0)
                }
            }
        } else {
            click_flip(e);
        }
    }

    const click_flip = (e) => {
        e.preventDefault();
        console.log("click flip")
        if (flipped === true) {
            setFlipped(false);
        } else {
            setFlipped(true)
        }
    };

    const click_home = (e) => {
        e.preventDefault();
        history.push('/')
    }

    if (!flashCards) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div className='fc_container'>
                <div className='flashcards'>
                    <button className='home_btn fc_home' onClick={click_home}><ion-icon name="home-outline"></ion-icon></button>
                    <div className='fc_btn_container'>
                    <button onClick={click_handler}>Next</button>
                    <button onClick={click_handler}>Random</button>
                    </div>
                <h1 onClick={click_handler}>{flipped ? flashCards[counter].definition : flashCards[counter].term}</h1>
                </div>

                <div className='fc_instructions'>
                    <h1>Chapter {id} FlashCards</h1>
                    <h4>To "flip" the card simply tap on the term</h4>
                    <h4>Next will go through the terms alphabetically</h4>
                    <h4>Random will select a random term</h4>
                    <h4>Enjoy</h4>
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