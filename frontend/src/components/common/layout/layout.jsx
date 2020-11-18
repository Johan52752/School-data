import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './layout.scss'

const Layout = ({ children, state }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><span>School</span><span className="logo-color">Data</span> </a>
                <div className="navbar-menu">
                    {state?.user && Object.keys(state.user).length > 0 && (
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/profile">Mi perfil</Link>
                                <Link className="dropdown-item" to="/calendar">Calendario</Link>
                                <Link className="dropdown-item" to="/homeworks">Mis tareas</Link>
                                <Link className="dropdown-item" to="/login">Cerrar Sesion</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            { children}
        </>
    )
}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, null)(Layout)