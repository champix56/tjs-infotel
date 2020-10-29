import store,{REST_SRV_ADR} from './memeReducer';
export const initialState = {
    meme: {
        imgId: 5, img: { id: 5, url: "react.png", w: 1200, h: 630 },
        text: { x: 20, y: 50, value: 'DEMAT BREIZH' },
    },
};
const currMemeReducer=(state = initialState, action) => {
  switch (action.type) {

  case 'SET_TEXT_VALUE':return { ...state, text:{...state.meme.text,value:action.value} };
  case 'SET_TEXT_X':return { ...state,meme:{...state.meme, text:{...state.meme.text,x:action.value}} };
  case 'SET_TEXT_Y':return { ...state,meme:{...state.meme, text:{...state.meme.text,y:action.value} }};
  case 'SET_IMG':return { ...state,meme:{...state.meme, imgId:action.value.id, img:{...action.value}} };
  case 'SET_TEXT_POST':
                const meme={...state.meme};
                delete meme.img;
                let headers=new Headers();
                headers.append('Content-Type','application/json')
                fetch(`${REST_SRV_ADR}/memes`+(meme.id?`/${meme.id}`:''),
                        {method:(meme.id?'PUT':'POST'),headers:headers,body:JSON.stringify(meme)})
                    .then(f=>f.json())
                    .then(o=>store.dispatch({type:'ADD_MEME_IN_LIST', value:o }))
    return state;
  default:
    return state
  }
};

export default currMemeReducer;