import axios from 'axios'
import config from '../config'

class HomeworksService {
    getHomeworksByUser = async (user_id, params) => {
        let response = await axios.get(`${config.backend}/tareas/${user_id}`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

    createHomework = async (user_id, params) => {
        let response = await axios.post(`${config.backend}/tarea/${user_id}`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }
}

export default HomeworksService