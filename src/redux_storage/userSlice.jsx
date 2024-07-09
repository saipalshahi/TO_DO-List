import { createSlice } from "@reduxjs/toolkit";

//Initial value what data should be loaded at first

const initialState = {
  user: [], // list of user   // single usser vako vayama [] ma null hunthiyo
};

// creating slice in store
export const userSlice = createSlice({
  name: "users",
  initialState,

  // reducer: list of actions (add data to list, remove, change)
  reducers: {
    //inserting/adding data into that empty array

    //state: above state{users-empty array}
    //action: {type: 'add', payload: {name: 'sagar', age
    // 23}}
    // action: we can trigger it from anywhere (homepage)

    addUser: (state, action) => {
      // state ma user ko data fill garne
      state.users = action.payload;
    },
  },
});

//exporting the reducer

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
