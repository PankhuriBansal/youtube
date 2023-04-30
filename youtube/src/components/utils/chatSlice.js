import { createSlice } from "@reduxjs/toolkit";
import { OFF_LIVECHAT } from "./constants";
const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state,action) => {
            state.messages.splice(OFF_LIVECHAT,1)      //to remove messages after loading to a particular number, to restrict the chat to 5 messages and remove the messages apart from it 
            state.messages.push(action.payload)  //unshift is used to push the new messages in the starting of the live chat
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer;
