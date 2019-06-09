import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';


const store = createStore(reducer, { initFilters: { text: "", manufacture: "All" } });


const reducer = (state, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return { ...state, counter: state.counter + 1 };
        case 'FILTER_MANUFACTURES':
            return { ...state, counter: state.counter + 1 };
        default:
            return products;
    }
};


const mapStateToProps = (state) => {
    return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'FILTER_TEXT' }),
        onDecrement: () => dispatch({ type: 'FILTER_MANUFACTURES' })
    }
};
