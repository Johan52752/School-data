import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostsService from '../../../services/postsService'
import './postsList.scss'

const PostsList = (props) => {
    const postsService = new PostsService()
    const category = props.match.params.type

    const [posts, setPosts] = useState([])

    useEffect(async () => {
        const response = await postsService.getPostsByCategory({ category })
        if (!response.data['error']) setPosts(response.data)
    }, [category])

    return (
        <>
            <div className="post-list-container">
                {posts.length > 0
                    ? (
                        <>
                            <h2>Publicaciones</h2>
                            {posts.map((element, index) => {
                                return (
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{element.tittle}</h5>
                                            <p className="card-text">{element.description}</p>
                                            <p className="card-text">Creado por: {element.id_student}</p>
                                            <Link to="/post/:id" className="card-link">Ver en detalle</Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )
                    : (
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">Sin publicaciones de esta categoria</h1>
                                <p class="lead">Puedes ser el primero en crearla! <Link to='/post/create'>Haz click aqui</Link></p>
                            </div>
                        </div>
                    )}

            </div>
        </>
    )
}

export default PostsList