import {createStore} from "redux";
import {smitterReducer} from "../redusers/smitterReducer.js";

const statsState = {
    followers: 0,
    following: 0,
}

const userState = {
    avatar: "https://gravatar.com/avatar/000?d=monsterid",
    name: 'Monster'
}

const initialState = {
    user: userState,
    stats: statsState
}

export const store = createStore(smitterReducer, initialState)