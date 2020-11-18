import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import UserService from '../../../services/userService'
import { connect } from 'react-redux'
import { registerUser, unlogUser } from '../../../actions'

import './register.scss'

const Register = (props) => {
    useEffect(() => {
        props.unlogUser()
    }, [])

    const registerForm = useForm()
    const userService = new UserService()

    const handleRegister = async (data) => {
        if( data.password === data.confirm_password){
            
            const userData = {
                name: data.name,
                id_student: data.id_student,
                description: data.description,
                password: data.password,
                email: data.email
            }

            const response = await userService.registerUser(userData)

            if (response.status === 200){
                props.registerUser({ user: response.data})
                props.history.push('/')
            } else {
                console.log(response)
            }

        } else {
            alert('Las contraseñas no son iguales')
        }
    }

    return (
        <>
            <div className="container-register">
                <h1 className='register-title'>Registrarse</h1>
                <form onSubmit={ registerForm.handleSubmit((event) => handleRegister(event)) }>
                    <div className="form-group">
                        <label htmlFor="">Nombre Completo</label>
                        <input className='form-control' type="text" name='name' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Nombre de usuario</label>
                        <input className='form-control' type="text" name='id_student' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input className='form-control' type="email" name='email' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Descripcion</label>
                        <textarea className='form-control' name='description' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Contraseña</label>
                        <input className='form-control' type="password" name='password' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Repetir constraseña</label>
                        <input className='form-control' type="password" name='confirm_password' ref={ registerForm.register }/>
                    </div>

                    <button className='btn btn-primary' type='submit'> Registrarse </button>
                </form>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    registerUser,
    unlogUser,
}

const mapStateToProps = (state) => {
     return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)