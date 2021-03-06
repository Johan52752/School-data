import axios from 'axios'
import config from '../config'

class PostsService {
    getPostsByCategory = async (params) => {
        let response = await axios.post(`${config.backend}/post`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

    createPost = async (user_id ,params) => {
        let response = await axios.post(`${config.backend}/posts/${user_id}`, params, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return response
    }

}

export default PostsService