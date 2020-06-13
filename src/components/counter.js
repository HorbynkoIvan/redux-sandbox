import React from "react";

const Counter = ({counter, inc, dec, rnd, clr}) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                id="dec"
                type="button"
                className="btn btn-primary btn-lg mx-1"
                onClick={dec}
            >
                DEC
            </button>
            <button
                id="inc"
                type="button"
                className="btn btn-secondary btn-lg mx-1"
                onClick={inc}>
                INC
            </button>
            <button
                id="rnd"
                type="button"
                className="btn btn-success btn-lg mx-1"
                onClick={rnd}>
                RND
            </button>
            <button
                id="clr"
                type="button"
                className="btn btn-warning btn-lg mx-1"
                onClick={clr}>
                CLR
            </button>
        </div>
    )
}

export default Counter;