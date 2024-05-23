const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
    users: [{ id: 1, name: "John" }, { id: 2, name: "Doe" }]
}

const userSlice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload.name,
                lname: action.payload.lastName
            }
            state.users.push(data);
        },
        getUser: (state, action) => { 
            console.log(action.payload);
            state.users.map((user) => user.id === action.payload.id ? data : user);
        },
        editUser: (state, action) => {
            const data = {
                id: action.payload.id,
                name: action.payload.name,
                lname: action.payload.lastName
            }
            state.users = state.users.map((user) => user.id === action.payload.id ? data : user);
        },
        removeUser: (state, action) => {
            console.log(action);
            state.users = state.users.filter((user) => user.id !== action.payload);
        }
    }
});

export const { addUser, getUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;