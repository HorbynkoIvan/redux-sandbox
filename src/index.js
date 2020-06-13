import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const {dispatch} = store;
const {dec, inc, rnd, clr} = bindActionCreators(actions, dispatch);

const counter = document.getElementById('counter');
const decBtn = document.getElementById('dec');
const incBtn = document.getElementById('inc');
const rndBtn = document.getElementById('rnd');
const clrBtn = document.getElementById('clr');

decBtn.addEventListener('click', dec);
incBtn.addEventListener('click', inc);
rndBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 10);
    rnd(random);
});
clrBtn.addEventListener('click', clr);

store.subscribe(() => {
    console.log(store.getState());
    counter.innerHTML = store.getState();
})