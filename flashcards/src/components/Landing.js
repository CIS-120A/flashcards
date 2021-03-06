import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {get_chapter, sortChapters} from "../Redux/Actions";
import { Redirect } from 'react-router';
import FlashCards from '../components/FlashCards'

const Landing = ({ sortChapters, history, get_chapter }) => {

    const [data, setData] = useState({
        chapter: null,
        option: ""
    })
    useEffect(() => {
        sortChapters();
    },[sortChapters]);

    const click_chapter = (e) => {
        setData({
            ...data,
            [e.target.name]: Number(e.target.value)
        })
    }

    const click_option = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        submitHandler(e)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        get_chapter(data.chapter || 1);
        setTimeout(() => {
            history.push(`/${e.target.name}/${data.chapter || 1}`)
        },200)
    }

    return (
        <div className='landing_container'>
            <h1>CIS100-A FlashCard Game</h1>
            <label className='select_label' htmlFor="flashcard">Choose a Chapter:</label>

            <select className='select' onChange={click_chapter} name="chapter" id="chapter-select">
                <option value="">--Please choose an option--</option>
                <option value={1}>Chapter One</option>
                <option value={2}>Chapter Two</option>
                <option value={3}>Chapter Three</option>
                <option value={4}>Chapter Four</option>
                <option value={5}>Chapter Five</option>
            </select>

            <button onClick={click_option}
                    className='landing_btn'
                    name='flashcards'
                    value='flashcards'>
                Study
            </button>
            <button onClick={click_option}
                    className='landing_btn'
                    name='game'
                    value='game'>
                Test your Knowledge
            </button>
            <button onClick={click_option}
                    className='landing_btn'
                    name='terms'
                    value='terms'>
                All Terms
            </button>

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