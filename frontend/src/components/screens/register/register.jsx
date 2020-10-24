import React from 'react'
import { useForm } from 'react-hook-form'
import UserService from '../../../services/userService'

const Register = () => {
    const registerForm = useForm()
    const userService = new UserService()

    const handleRegister = async (data) => {
        if( data.password === data.confirm_password){
            const userData = {
                name: data.name,
                id_student: data.id_student,
                description: data.description,
                password: data.password
            }
            const response = await userService.registerUser(userData)
            console.log(response)
        }
    }

    return (
        <>
            <div className="container-login">
                <form onSubmit={ registerForm.handleSubmit((event) => handleRegister(event)) }>
                    <div className="form-group">
                        <label htmlFor="">Nombre Completo</label>
                        <input type="text" name='name' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Nombre de usuario</label>
                        <input type="text" name='id_student' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Descripcion</label>
                        <input type="textarea" name='description' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Contraseña</label>
                        <input type="text" name='password' ref={ registerForm.register }/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Repetir constraseña</label>
                        <input type="text" name='confirm_password' ref={ registerForm.register }/>
                    </div>

                    <button type='submit'> Registrarse </button>
                </form>
            </div>
        </>
    )
}

export default Register