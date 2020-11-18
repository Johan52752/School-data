import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import CategoriesService from '../../../services/categoriesService'
import HomeworksService from '../../../services/homeworksService'
import './homeworksCreate.scss'

const HomeworksCreate = (props) => {
    const categoriesService = new CategoriesService()
    const homeworksService = new HomeworksService()
    const registerForm = useForm()

    const categories = categoriesService.getCategories()

    const handleSendForm = async (data) => {
        if (data.tittle && data.description && data.categorie){
            const response = await homeworksService.createHomework(props.user._id.$oid, data)
            if (!response.data['error']){
                alert('Tarea creada correctamente')
            }
        }
    }

    return (
        <>
            <div className="homework-create-container">
                <h2>Crear una tarea</h2>
                <form onSubmit={ registerForm.handleSubmit((event) => handleSendForm(event)) }>
                    <div className="form-group">
                        <label htmlFor="">Titulo de la tarea</label>
                        <input className='form-control' type="text" name='tittle' ref={registerForm.register} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Contenido de la tarea</label>
                        <textarea className='form-control' name='description' ref={registerForm.register} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Titulo de la tarea</label>
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

export default connect(mapStateToProps, null)(HomeworksCreate)