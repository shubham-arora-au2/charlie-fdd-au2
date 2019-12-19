function categoryReducer(state = { currentCategory : null}, action) { 
    switch (action.type) {

        case 'CURRENT_CATEGORY':
            return Object.assign({}, state, { currentCategory: action.value });
            
        default:
            return state;
    }
}

export default categoryReducer;