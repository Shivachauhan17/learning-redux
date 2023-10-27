// import {createStore} from 'redux'


// const reducerFunction=(state={counter:0},action)=>{
//     //It should ALWAYS BE A synchronus function
//     //we should never mutate the original state

//     if(action.type==="INC"){
//         return {counter:state.counter+1}
//     }

//     if(action.type==="DEC"){
//         return {counter:state.counter-1}
//     }
//     if(action.type==="ADD_BY"){
//         return {counter:state.counter+action.payload}
//     }

//     return state;
// }

// const store=createStore(reducerFunction)

// export default store;

import {configureStore,createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increment(state,action){
            state.counter++;
        },
        decrement(state,action){
            state.counter--
        },
        addBY(state,action){
            state.counter+=action.payload
        }
    }
})

export const action= counterSlice.actions
const store=configureStore({
    reducer:counterSlice.reducer
})

export default store;