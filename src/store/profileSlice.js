const { createSlice } = require("@reduxjs/toolkit");

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        user:[]
    },
    reducers: {
        addUser(state, action) {
            state.user.push(action.payload);
        },
    }
})

export const {addUser} = profileSlice.actions;
export default profileSlice.reducer;