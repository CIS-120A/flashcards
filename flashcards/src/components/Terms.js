import React, { useState  } from 'react';
import { connect } from "react-redux";

function Terms ({ data, history }) {

    const [filter, setFilter] = useState(false);
    const [input, setInput] = useState("");
    const [terms, setTerms] = useState(data);

    const filter_list = (e) => {
        e.preventDefault();
        setFilter(!filter);
    }

    const change_handler = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    };

    const click_home = (e) => {
        e.preventDefault();
        history.push('/')
    }

    const filter_terms = (arr, query) => {
        return arr.filter(el => el.term.substr(0,3).toLocaleLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    let filtered_terms = filter_terms(terms, input)

    if (!data) {

        return <h1>Loading....</h1>
    } else
    return (
        <div className='learning_container'>
            <button className='home_btn' onClick={click_home}><ion-icon name="home-outline"></ion-icon></button>
            <button className='filter_btn' onClick={filter_list}>Filter</button>
            {filter && (
                <div>
                    <input className='term_input' type='text' name='filter' onChange={change_handler} />

                    {filtered_terms.map(arr => {
                        return (
                            <div className='term_container' key={Math.random()}>
                                <h3 className='capitalize'>{arr.term}</h3>
                                <p>{arr.definition}</p>
                            </div>
                        )
                    })}
                </div>
            )}
            {terms.map(arr => {
                return (
                    <div className='term_container' key={Math.random()}>
                        <h3 className='capitalize'>{arr.term}</h3>
                        <p>{arr.definition}</p>
                    </div>
                )
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.card_list
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Terms);