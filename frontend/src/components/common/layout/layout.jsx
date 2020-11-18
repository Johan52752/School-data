import React from 'react'
import './layout.scss'

const Layout = ({ children }) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><span>School</span><span className="logo-color">Data</span> </a>
            </nav>
            { children }
        </>
    )
}

export default Layout