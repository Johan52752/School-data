import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { unlogUser } from '../../../actions'
import { useForm } from 'react-hook-form'
import { logUser } from '../../../actions'
import UserService from '../../../services/userService'

import './login.scss'

const Login = (props) => {

    useEffect(() => {
        props.unlogUser()
    }, [])

    const registerForm = useForm()
    const userService = new UserService()

    const handleLogin = async (data) => {
        if (data.email && data.password){
            const response = await userService.loginUser(data)

            if (response.status === 200){
                props.logUser({ user: response.data})
                props.history.push('/')
            } else {
                alert('Datos de inicio de sesion incorrectos')
            }

        } else {
            alert('Rellena ambos campos para ingresar')
        }
    }

    return (
        <>
            <div className="container-login">
                <h1 className='login-title'>Iniciar sesion</h1>
                <Form onSubmit={ registerForm.handleSubmit((event) => handleLogin(event)) }>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="example@example.com" ref={ registerForm.register }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control name='password' type="password" placeholder="*******" ref={ registerForm.register }/>
                    </Form.Group>
                    <Form.Text>
                        Si no estas registrado <span onClick={() => props.history.push('/register')} className='color-alert'>¡Haz click aqui!</span> 
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    unlogUser,
    logUser,
}

const mapStateToProps = (state) => {
     return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)