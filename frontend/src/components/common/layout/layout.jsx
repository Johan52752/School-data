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
                        <ul className="navbar-list">
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Cerrar Sesion</Link>
                            </li>
                        </ul>
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