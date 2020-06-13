import {createStore} from "redux";

const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'DEC':
            return state - 1;
        case 'INC':
            return state + 1;
        case 'RND':
            return state = action.payload;
        case 'CLR':
            return state = 0;
        default:
            return state
    }

}

const store = createStore(reducer);

const counter = document.getElementById('counter');
const decBtn = document.getElementById('dec');
const incBtn = document.getElementById('inc');
const rndBtn = document.getElementById('rnd');
const clrBtn = document.getElementById('clr');

decBtn.addEventListener('click', () => store.dispatch({type: 'DEC'}))
incBtn.addEventListener('click', () => store.dispatch({type: 'INC'}))
rndBtn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 10)
    store.dispatch({type: 'RND', payload: random})
})
clrBtn.addEventListener('click', () => store.dispatch({type: 'CLR'}))

store.subscribe(() => {
    console.log(store.getState());
    counter.innerHTML = store.getState();
})