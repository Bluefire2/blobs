export default (state = null, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return state + 1;
        default:
            return state;
    }
}