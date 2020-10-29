import { combineReducers, createStore } from "redux";
import currMemeReducer from './currMemeReducer';
export const REST_SRV_ADR='http://localhost:5644';

export const initialState = {
    memes: [],
    imgs: []
}
function memeReducer(state = initialState, action) {
    console.log(action.type);
    if(action.type.includes('@@redux/INIT'))
    {
        action.type='INIT';
    }

    switch (action.type) {
        case 'INIT':
            fetch(`${REST_SRV_ADR}/memes`).then(j=>j.json()).then(o=>{
                
                store.dispatch({type:'ADD_MEMES_IN_LIST',values:o})
            })
            fetch(`${REST_SRV_ADR}/imgs`).then(j=>j.json()).then(o=>{
                
                store.dispatch({type:'ADD_IMGS_IN_LIST',values:o})
            })
            return state;
        case 'ADD_MEME_IN_LIST': return { ...state, memes: [...state.memes, action.value] };
        case 'ADD_MEMES_IN_LIST': return { ...state, memes: [...action.values] };
        case 'ADD_IMGS_IN_LIST': return { ...state, imgs: [...action.values] };
        default: return state;
    }
}

const combinedReducer=combineReducers({datas:memeReducer, current:currMemeReducer});

const store = createStore(combinedReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch({ type: 'ADD_MEMES_IN_LIST', values: [{ id: 3, text: { x: 120 } }, { id: 4, text: { x: 250 } }] })
// // console.log(state)

// store.dispatch({ type: 'ADD_MEME_IN_LIST', value: { id: 1, text: { x: 0 } } })
// console.log(state);
export default store;