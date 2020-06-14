import React from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd, clr}) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                className="btn btn-primary btn-lg mx-1"
                onClick={dec}
            >
                DEC
            </button>
            <button
                className="btn btn-secondary btn-lg mx-1"
                onClick={inc}>
                INC
            </button>
            <button
                className="btn btn-success btn-lg mx-1"
                onClick={rnd}>
                RND
            </button>
            <button
                className="btn btn-warning btn-lg mx-1"
                onClick={clr}>
                CLR
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd, clr} = bindActionCreators(actions, dispatch);
    return {
        dec,
        inc,
        rnd: () => {
            const random = Math.floor(Math.random() * 10);
            rnd(random);
        },
        clr,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);