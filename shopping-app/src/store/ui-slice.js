import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui-slice',
    initialState:{notification:{message:"",
        type:"error",
        open:false}},
    reducers:{
        showNotification(state,action){
            state.notification={
                message:action.payload.message,
                type:action.payload.type,
                open:action.payload.open
            }
        }
    }
})

export const uiActions=uiSlice.actions

export default uiSlice;