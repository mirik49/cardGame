import {indexReducer} from "./index/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from 'redux';

export const baseState: any = {
    isEndGame: false,
    timeSec: 0,
    timeMin: 0,
    cards: [
        {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-6.svg",
            suit: "diamond",
            name: "six"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-7.svg",
            suit: "diamond",
            name: "seven"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-8.svg",
            suit: "diamond",
            name: "eight"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-9.svg",
            suit: "diamond",
            name: "nine"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-10.svg",
            suit: "diamond",
            name: "ten"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-jack.svg",
            suit: "diamond",
            name: "jack"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-queen.svg",
            suit: "diamond",
            name: "queen"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-king.svg",
            suit: "diamond",
            name: "king"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/diamond-ace.svg",
            suit: "diamond",
            name: "ace"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-6.svg",
            suit: "heart",
            name: "six"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-7.svg",
            suit: "heart",
            name: "seven"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-8.svg",
            suit: "heart",
            name: "eight"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-9.svg",
            suit: "heart",
            name: "nine"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-10.svg",
            suit: "heart",
            name: "ten"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-jack.svg",
            suit: "heart",
            name: "jack"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-queen.svg",
            suit: "heart",
            name: "queen"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-king.svg",
            suit: "heart",
            name: "king"
        }, {
            back: "/static/card/back.svg",
            front: "/static/card/heart-ace.svg",
            suit: "heart",
            name: "ace"
        },
        // {
        //
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-6.svg",
        //     suit: "spade",
        //     name: "six"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-7.svg",
        //     suit: "spade",
        //     name: "seven"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-8.svg",
        //     suit: "spade",
        //     name: "eight"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-9.svg",
        //     suit: "spade",
        //     name: "nine"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-10.svg",
        //     suit: "spade",
        //     name: "ten"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-jack.svg",
        //     suit: "spade",
        //     name: "jack"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-queen.svg",
        //     suit: "spade",
        //     name: "queen"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-king.svg",
        //     suit: "spade",
        //     name: "king"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/spade-ace.svg",
        //     suit: "spade",
        //     name: "ace"
        // },{
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-6.svg",
        //     suit: "club",
        //     name: "six"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-7.svg",
        //     suit: "club",
        //     name: "seven"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-8.svg",
        //     suit: "club",
        //     name: "eight"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-9.svg",
        //     suit: "club",
        //     name: "nine"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-10.svg",
        //     suit: "club",
        //     name: "ten"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-jack.svg",
        //     suit: "club",
        //     name: "jack"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-queen.svg",
        //     suit: "club",
        //     name: "queen"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-king.svg",
        //     suit: "club",
        //     name: "king"
        // }, {
        //     back: "/static/card/back.svg",
        //     front: "/static/card/сlub-ace.svg",
        //     suit: "club",
        //     name: "ace"
        // },
    ]
};

const mainReducer = combineReducers({
    index: indexReducer,
});

const withDevTools = () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return composeWithDevTools(applyMiddleware(thunk));
        case "production" :
            return applyMiddleware(thunk)
    }
}

export function initializeStore(initialState = baseState) {
    return createStore(
        mainReducer,
        initialState,
        withDevTools()
    )
}
