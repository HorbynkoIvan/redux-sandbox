import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

import Counter from "./components/counter";

const store = createStore(reducer);
const {dispatch} = store;
const {dec, inc, rnd, clr} = bindActionCreators(actions, dispatch);

const update = () => {
    return ReactDOM.render(
        <Counter
            counter={store.getState()}
            dec={dec}
            inc={inc}
            rnd={() => {
                const random = Math.floor(Math.random() * 20);
                rnd(random);
            }}
            clr={clr}
        />,
        document.getElementById('root'))
}

update();
store.subscribe(() => {
    update();
})

