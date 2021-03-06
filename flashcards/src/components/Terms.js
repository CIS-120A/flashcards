import React, { useState  } from 'react';
import { connect } from "react-redux";

function Terms ({ data }) {

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

    const filter_terms = (arr, query) => {
        return arr.filter(el => el.term.substr(0,1).toLocaleLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    let filtered_terms = filter_terms(terms, input)

    if (!data) {
        return <h1>Loading....</h1>
    } else
    return (
        <div className='learning_container'>
            <button onClick={filter_list}>Filter</button>
            {filter && (
                <div>
                    <input type='text' name='filter' onChange={change_handler} />

                    {filtered_terms.map(arr => {
                        return (
                            <div key={Math.random()}>
                                <h3 className='term'>{arr.term}</h3>
                                <p>{arr.definition}</p>
                            </div>
                        )
                    })}
                </div>
            )}
            {terms.map(arr => {
                return (
                    <div key={Math.random()}>
                        <h3 className='term'>{arr.term}</h3>
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