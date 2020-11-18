import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeworksService from '../../../services/homeworksService'
import './homeworks.scss'

const Homeworks = (props) => {
    const homeworksService = new HomeworksService()
    const user_id = props.user._id.$oid

    const [homeworks, setHomeworks] = useState([])

    useEffect(async () => {
        const response = await homeworksService.getHomeworksByUser(user_id)
        if (!response.data['error']) setHomeworks(response.data)
    }, [user_id])

    return (
        <>
            <div className="container-homeworks">
                {homeworks.length > 0
                    ? (
                        <>
                            <h2>Tareas <Link to='/homeworks/create'> Crear tarea</Link> </h2>
                            {homeworks.map((element, index) => {
                                return (
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{element.tittle}</h5>
                                            <p className="card-text">{element.description}</p>
                                            <p className="card-text">Categoria: {element.categorie}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    )
                    : (
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">!Que suerte tienes!</h1>
                                <p class="lead">¡NO TIENES TAREA! <Link to='/homeworks/create'>Agenda una</Link></p>
                            </div>
                        </div>
                    )}

            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, null)(Homeworks)