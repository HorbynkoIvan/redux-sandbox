import {createStore} from "redux";
import reducer from "./reducer";
import {dec, inc, rnd, clr} from "./actions";

const store = createStore(reducer);

const counter = document.getElementById('counter');
const decBtn = document.getElementById('dec');
const incBtn = document.getElementById('inc');
const rndBtn = document.getElementById('rnd');
const clrBtn = document.getElementById('clr');

decBtn.addEventListener('click', () => store.dispatch(dec()))
incBtn.addEventListener('click', () => store.dispatch(inc()))
rndBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 10)
    store.dispatch(rnd(random))
})
clrBtn.addEventListener('click', () => store.dispatch(clr()))

store.subscribe(() => {
    console.log(store.getState());
    counter.innerHTML = store.getState();
})