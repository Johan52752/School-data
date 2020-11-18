import axios from 'axios'
import config from '../config'

class UserService {
    registerUser = async (params) => {
        let response = await axios.post(`${config.backend}/users`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

    loginUser = async (params) => {
        let response = await axios.post(`${config.backend}/login`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

    getUser = async (user_id, params) => {
        let response = await axios.get(`${config.backend}/user/${user_id}`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }
}

export default UserService