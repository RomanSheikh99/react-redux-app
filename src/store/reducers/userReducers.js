const userReducers = {
    updatedName:(state,action)=>{
        state.user = action.payload;
    },
}

export default userReducers;