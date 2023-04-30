import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {               //having initial state as true for tog menu to open or close 
        isMenuOpen: true,
    },
    reducers:{                     //next it should have reducers which shall have actions in it 
        toggleMenu : (state) => {    //first parameter is state 
            state.isMenuOpen = !state.isMenuOpen               //we have used togglemenu for state change to change the state of sidebar
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;    //making the side bar close the menu when we click to watch page on it's own 
        }             
    }
})

export const {toggleMenu,closeMenu} =  appSlice.actions
export default appSlice.reducer;

//now we will add the appSlice to our store 
