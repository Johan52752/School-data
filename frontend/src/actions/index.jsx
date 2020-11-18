export const registerUser = (payload) => ({
    type: 'REGISTER_USER',
    payload,
})

export const unlogUser = (payload) => ({
    type: 'UNLOG_USER',
    payload
})

export const logUser = (payload) => ({
    type: 'LOG_USER',
    payload
})