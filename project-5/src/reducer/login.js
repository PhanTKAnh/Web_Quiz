const loginReducer = (state=false,action) => {
    console.log(state,action);
    switch (action.type) {
        case "CHECK_LOGIN":
            return action.status;
    
        default:
            break;
    }
    return state;

}
export default loginReducer