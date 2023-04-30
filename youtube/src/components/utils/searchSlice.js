import { createSlice } from "@reduxjs/toolkit";

//making this slice to store the results of the search api call and fetch the results if the same keywords are to be searched after the results are saved here 
const searchSlice = createSlice({
  name: 'search',
  initialState: {          ///first state should be cache, empty object as an initial state 
    
  },
  reducers: {
    cacheResults: (state,action) => {    //to cache results we will use empty object as state
      //making reducer cachResults and making a state where we need to make an action
      // state = {...action.payload, ...state} //to add values to search objects 
        //we will add all our results to the state in the form of object.assign
        state = Object.assign(state,action.payload)       ///Object.assign(target,sourceobj1,sourceobj2, ...)                    
        //to merge the payload as well as the state in the actions 
    }
  }
})

export const  { cacheResults} =  searchSlice.actions   //now we have our slice ready and we will put it into our store
export default searchSlice.reducer;
//search complexity in array = O(n)
//search complexity in object = O(1)