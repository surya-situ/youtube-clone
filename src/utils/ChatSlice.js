import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice( {
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers : {
        addMessage: (state, action) => {
            //removing messages so that out system will not get hang.
            state.messages.splice(LIVE_CHAT_COUNT, 1)
            //displaying all the messages:
            state.messages.push(action.payload)
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer;