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
        console.log(response)
        return response
    }
}

export default UserService