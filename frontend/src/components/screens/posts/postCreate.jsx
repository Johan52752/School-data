import React from 'react'
import { useForm } from 'react-hook-form'
import CategoriesService from '../../../services/categoriesService'

import './postCreate.scss'

const PostCreate = (props) => {
    const categoriesService = new CategoriesService()
    const registerForm = useForm()

    const categories = categoriesService.getCategories()

    const handleSendForm = (data) => {

    }

    return (
        <>
            <div className="post-create-container">
                <h2>Crear una publicacion</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Titulo de la publicacion</label>
                        <input className='form-control' type="text" name='title' ref={registerForm.register} />
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

export default PostCreate