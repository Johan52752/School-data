const reducers = (state, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                user: action.payload.user
            }
        case 'UNLOG_USER':
            state.user = {}
            return {
                ...state
            }
        case 'LOG_USER':
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state
    }
}

export default reducers;