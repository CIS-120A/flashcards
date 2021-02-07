import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import axios from "axios";

const FlashCard_Study = ({ data, match }) => {
    const [flipped, setFlipped] = useState(false);
    const [flashCards, setFlashCards] = useState();

    let id = match.params.id
    useEffect(() => {
        axios.get(`http://localhost:5000/chapter/${id}`)
            .then(res => {
                setFlashCards(res.data)
                getRandom()
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    const getRandom = () => {
        let random = Math.floor(Math.random() * Math.floor(flashCards.length))
        setTerm(random)
        // for (let i = 3; i >= 0; i--) {
        //     choices[i] = Math.floor(Math.random() * Math.floor(flashCards.length));
        //     if (i === 0) {
        //         choices[i] = term
        //     }
        // }
    };

    const [term, setTerm] = useState(0);
    // const [choices, setChoices] = useState([
    //     term,
    //     Math.floor(Math.random() * Math.floor(20)),
    //     Math.floor(Math.random() * Math.floor(20)),
    //     Math.floor(Math.random() * Math.floor(20))]);

    const handleFlip = () => {
        setFlipped(!flipped)
    }

    if (!flashCards) {
        return <h1>Loading...</h1>
    } else {

    return (
        <div>
            <h1>{flipped ? flashCards[term].definition : flashCards[term].term}</h1>
            {/*<p>{flashCards[term].definition}</p>*/}
            {/*<p>{flashCards[Math.floor(Math.random() * Math.floor(flashCards.length))].definition}</p>*/}
            {/*<p>{flashCards[Math.floor(Math.random() * Math.floor(flashCards.length))].definition}</p>*/}
            {/*<p>{flashCards[Math.floor(Math.random() * Math.floor(flashCards.length))].definition}</p>*/}

            {/*{choices.map(arr => {*/}
            {/*    return <p key={flashCards[arr].id}>{flashCards[arr].definition}</p>*/}
            {/*})}*/}
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