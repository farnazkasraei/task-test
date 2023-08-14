import { createSlice } from "@reduxjs/toolkit";

// const users =
//   localStorage.getItem("users") !== null
//     ? JSON.parse(localStorage.getItem("users"))
//     : [];

// const setItemFunc = (item) => {
//   localStorage.setItem("users", JSON.stringify(item));
// };

const userSlices = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      // setItemFunc(state.users.map((item) => item));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      // setItemFunc(state.users.map((item) => item));
    },
  },
});

export const { addUser, deleteUser } = userSlices.actions;
export default userSlices.reducer;
