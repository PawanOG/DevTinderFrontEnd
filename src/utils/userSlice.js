import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers: {
     addUser : (state,action) => {
        return action.payload;
     },
     removeUser : (state) => {
        return null;
     }
   }
});

//we have to export our action too
export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;   