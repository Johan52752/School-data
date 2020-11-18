import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserService from '../../../services/userService'
import './profile.scss'

const Profile = (props) => {
    const userService = new UserService()
    const user_id = props.user._id.$oid

    const [user, setUser] = useState({ name: '', description: '', points: '', email: '' })

    useEffect(async () => {
        const response = await userService.getUser(user_id)
        if (!response.data['error']) setUser(response.data)
    }, [user_id])

    return (
        <div className="container-profile">
            <h1>Información del usuario</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> <span className='card-span'>Nombre de usuario:</span> {user.name}</h5>
                    <h5 className="card-text"> <span className='card-span'>Descripción:</span> {user.description}</h5>
                    <h5 className="card-text"> <span className='card-span'>Puntaje dentro de SchoolData:</span> {user.points}</h5>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, null)(Profile)