function loginReducer(state = { LoggedIn: JSON.parse(localStorage.getItem('user')) }, action) {

    JSON.parse(localStorage.getItem('user'))

    switch (action.type) {
        case 'LOGOUT_USER':
            return Object.assign({}, state, { LoggedIn: null });
        case 'LOGIN_USER':
            return Object.assign({}, state, { LoggedIn: localStorage.getItem('user') });

        default:
            return state;
    }
}

export default loginReducer;