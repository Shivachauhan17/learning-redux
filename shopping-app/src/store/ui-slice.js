import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui-slice',
    initialState:{notification:null},
    reducers:{
        showNotification(state,action){
            state.notification={
                message:action.payload.message,
                type:action.payload.type,
                open:action.payload.opn
            }
        }
    }
})

export const uiActions=uiSlice.actions

export default uiSlice;