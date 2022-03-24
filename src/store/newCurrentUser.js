import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++lastId,
                username: action.payload.username,
                name: action.payload.name,
                password: action.payload.password,
                email: action.payload.email
            });
        },
        userRemoved: (users, action) => {
            users.filter(users => users.id !== action.payload.id);
        }
    }
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;
