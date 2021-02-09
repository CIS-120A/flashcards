import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

const FlashCard_Study = ({ match, one, two, three, four, five }) => {

    let id = match.params.id
    const [start, setStart] = useState(true)
    const [flipped, setFlipped] = useState(false);
    const [flashCards, setFlashCards] = useState(null);
    const [card, setCard] = useState({
        term: null,
        definition: null,
        choiceA: "",
        choiceB: "",
        choiceC: "",
    });
    const [term, setTerm] = useState(0);
    let choices = [card.definition, card.choiceC, card.choiceB, card.choiceA];
    choices.sort()

    useEffect(() => {
        if (Number(id) === 1) {
            setFlashCards(one)
        }
        if (id === 2) {
            setFlashCards(two)
        }
        if (id === 3) {
            setFlashCards(three)
        }
        if (id === 4) {
            setFlashCards(four)
        }
        if (id === 5) {
            setFlashCards(five)
        }
    }, [id])


    const getRandom = () => {
        let random = Math.floor(Math.random() * Math.floor(flashCards.length));
        setCard({
            term: flashCards[random].term,
            definition: flashCards[random].definition,
            choiceA: flashCards[Math.floor(Math.random() * Math.floor(flashCards.length))].definition,
            choiceB: flashCards[Math.floor(Math.random() * Math.floor(flashCards.length))].definition,
            choiceC: flashCards[Math.floor(Math.random() * Math.floor(flashCards.length))].definition,
        })
        setTerm(random)
    };

    const clickHandler = (e) => {
        e.preventDefault()
        getRandom()
        setStart(!start)
    };

    const choiceClicker = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleFlip = () => {
        setFlipped(!flipped)
    }
    console.log(card)
    if (!flashCards) {
        return <h1>Loading...</h1>
    } else if (start) {
        return (
            <div>
                <button onClick={clickHandler}>Start</button>
            </div>
        )
    } else {

        return (
            <div>
                <h1>{flipped ? flashCards[term].definition : flashCards[term].term}</h1>
                {choices.map(arr => {
                    return <div className={() => arr === flashCards[term].definition ? 'wrong':'right'}>{arr}</div>
                })}
                <button onClick={handleFlip}>Flip Card</button>
                <button onClick={getRandom}>Change</button>
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
        five: state.five
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard_Study);