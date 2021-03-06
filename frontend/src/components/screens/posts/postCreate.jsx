import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import CategoriesService from '../../../services/categoriesService'
import PostsService from '../../../services/postsService'

import './postCreate.scss'

const PostCreate = (props) => {
    const categoriesService = new CategoriesService()
    const postsServices = new PostsService()
    const registerForm = useForm()

    const categories = categoriesService.getCategories()

    const handleSendForm = async (data) => {
        if (data.tittle && data.description && data.categorie){
            const response = await postsServices.createPost(props.user._id.$oid, data)
            if (!response.data['error']){
                alert('Publicacion creada correctamente')
            }
        }
    }

    return (
        <>
            <div className="post-create-container">
                <h2>Crear una publicacion</h2>
                <form onSubmit={ registerForm.handleSubmit((event) => handleSendForm(event)) }>
                    <div className="form-group">
                        <label htmlFor="">Titulo de la publicacion</label>
                        <input className='form-control' type="text" name='tittle' ref={registerForm.register} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Contenido</label>
                        <textarea className='form-control' name='description' ref={registerForm.register} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Titulo de la publicacion</label>
                        <select className='form-control'
                            name='categorie'
                            ref={registerForm.register}
                        >
                            {categories && categories.map(element => {
                                return <option value={element.link}>{element.title}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <button className='btn btn-primary'>Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, null)(PostCreate)