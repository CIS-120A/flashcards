import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {get_chapter, sortChapters} from "../Redux/Actions";
import { Redirect } from 'react-router';
import FlashCards from '../components/FlashCards'

const Landing = ({ sortChapters, history, get_chapter }) => {

    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({
        chapter: 1,
        option: "flashcards"
    })
    useEffect(() => {
        sortChapters();
    },[sortChapters]);

    const click_chapter = (e) => {
        e.preventDefault();
        setData({
            ...data,
            chapter: Number(e.target.value)
        })
    }

    const click_option = (e) => {
        setData({
            ...data,
            option: e.target.value
        })
        setEdit(!edit)
    }

    const click_chapter_back = (e) => {
        e.preventDefault();
        setEdit(!edit)
    }

    const submitHandler = () => {
        get_chapter(data.chapter || 1);
        setTimeout(() => {
            history.push(`/${data.option}/${data.chapter || 1}`)
        },200)
    }

    return (
        <div className='landing_container'>
            <h1>CIS100-A Terminology Portal</h1>

            <div className={edit ? 'hide':'landing_btn_container'}>
            <button onClick={click_option}
                    className='landing_btn'
                    name='option'
                    value='flashcards'>
                Flashcards
            </button>
            <button onClick={click_option}
                    className='landing_btn'
                    name='option'
                    value='game'>
                Game
            </button>
            <button onClick={click_option}
                    className='landing_btn'
                    name='option'
                    value='terms'>
                Terms
            </button>
                </div>
            { edit && (
                <div className='chapter_select'>
                    {/*<label className='select_label' htmlFor="chapter">Choose a Chapter:</label>*/}
                    <select className='select' onChange={click_chapter} name="chapter" id="chapter">
                        <option value="">Chapter Select...</option>
                        <option name='chapter' value={1}>Chapter One</option>
                        <option name='chapter' value={2}>Chapter Two</option>
                        <option name='chapter' value={3}>Chapter Three</option>
                        <option name='chapter' value={4}>Chapter Four</option>
                        <option name='chapter' value={5}>Chapter Five</option>
                    </select>

                    <button onClick={click_chapter_back} className='landing_btn'>Back</button>
                    <button onClick={submitHandler} className='landing_btn'>Submit</button>
                </div>
            )}
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