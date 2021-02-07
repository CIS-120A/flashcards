import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import axios from "axios";

const FlashCard_Study = ({ data, match }) => {
    const [flipped, setFlipped] = useState(false);
    const [term, setTerm] = useState(0);
    const [flashCards, setFlashCards] = useState()

    let id = match.params.id
    useEffect(() => {
        axios.get(`http://localhost:5000/chapter/${id}`)
            .then(res => {
                console.log(res.data)
                setFlashCards(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const getRandom = () => {
        let random = Math.floor(Math.random() * Math.floor(flashCards.length))
        setTerm(random)
    };

    const handleFlip = () => {
        setFlipped(!flipped)
    }

    console.log(flashCards)
    console.log(term)
    if (!flashCards) {
        return <h1>Loading...</h1>
    } else {
    return (
        <div>
            <h1>{flipped ? flashCards[term].definition : flashCards[term].term}</h1>
            <button onClick={handleFlip}>Flip Card</button>
            <button onClick={getRandom}>Change</button>
        </div>
    )}
}

function mapStateToProps(state) {
    return {
        data: state.card
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard_Study);