import React, { useState } from 'react';
import {set_score} from "../Redux/Actions";
import {connect} from "react-redux";

function Terms ({data}) {

    const [flipped, setFlipped] = useState(false);
    const [terms, setTerms] = useState(data)

    const click_handler = (e) => {
        e.preventDefault();
        setFlipped(!flipped)
    }

    const mouse_hover = (e) => {
        console.log(e)
    }

    if (!data) {
        return <h1>Loading....</h1>
    } else
    return (
        <div className='learning_container'>
            {terms.map(arr => {
                return (
                    <div key={Math.random()}>
                        <h3 className='term'>{arr.term}</h3>
                        <p onClick={click_handler}>{flipped ? 'show':arr.definition}</p>
                    </div>
                )
            })}
        </div>
    )

}

function mapStateToProps(state) {
    return {
        data: state.terms
    }
}

const mapDispatchToProps = {
    set_score
};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);