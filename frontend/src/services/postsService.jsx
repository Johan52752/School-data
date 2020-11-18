import axios from 'axios'
import config from '../config'

class PostsService {
    getPostsByCategory = async (params) => {
        let response = await axios.post(`${config.backend}/posts`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

    createPost = async (params) => {
        let response = await axios.post(`${config.backend}/posts`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

}

export default PostsService