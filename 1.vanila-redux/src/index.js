import { createStore } from 'redux';

const lightDiv = document.querySelector(".light")
const switchButton = document.querySelector("#switch-btn")

const counterHeadings = document.querySelector("h1");
const plusButton = document.querySelector("#plus-btn");
const minusButton = document.querySelector("#minus-btn");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increment = (diff) => ({type: INCREMENT, diff});
const decrement = () => ({type: DECREMENT});

const initialState = {
    light: false,
    counter: 111,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                light: !state.light
            }
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.diff
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer)

const render = () => {
    const state = store.getState();
    const { light, counter } = state;

    if(light) {
        lightDiv.style.background = "green";
        switchButton.innerText = "끄기"
    } else {
        lightDiv.style.background = "gray";
        switchButton.innerText = "켜기"
    }
    counterHeadings.innerText = counter
}

render()