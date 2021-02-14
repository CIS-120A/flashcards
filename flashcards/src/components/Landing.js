import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {get_chapter, sortChapters} from "../Redux/Actions";
import { Link } from 'react-router-dom';
import FlashCards from '../components/FlashCards'

const Landing = ({ sortChapters, data, history, get_chapter }) => {
    useEffect(() => {
        sortChapters();
    },[sortChapters]);

    let chapter = null

    const submitHandler = (e) => {
        e.preventDefault();
        chapter = e.target.value
        console.log(chapter)
        get_chapter(chapter)
        history.push(`/flashcards/${chapter}`)
    }

    return (
        <div>
            <h1>CIS100-A FlashCard Game</h1>
            <label htmlFor="flashcard">Choose a Chapter:</label>

            <select onChange={submitHandler} name="flashcard" id="chapter-select">
                <option value="">--Please choose an option--</option>
                <option value={1}>Chapter One</option>
                <option value={2}>Chapter Two</option>
                <option value={3}>Chapter Three</option>
                <option value={4}>Chapter Four</option>
                <option value={5}>Chapter Five</option>
            </select>

            <Link to='/flashcards'>Study All Chapters</Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state
    }
}

const mapDispatchToProps = {
    sortChapters,
    get_chapter
};

export default connect(mapStateToProps,mapDispatchToProps)(Landing)