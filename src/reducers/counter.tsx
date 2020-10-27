const counterReducer = (state = 0, action: any) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state + 1
            };
        case 'DECREMENT':
            return {
                count: state - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

export default counterReducer;