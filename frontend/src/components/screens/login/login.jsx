import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { unlogUser } from '../../../actions'

import './login.scss'

const Login = (props) => {
    useEffect(() => {
        props.unlogUser()
    }, [])

    return (
        <>
            <div className="container-login">
                <h1 className='login-title'>Iniciar sesion</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@example.com" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="*******" />
                    </Form.Group>
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
}

const mapStateToProps = (state) => {
     return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)