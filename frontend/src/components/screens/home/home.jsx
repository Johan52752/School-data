import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Home = (props) => {

    useEffect(() => {
        if (props.user === undefined){
            console.log('entra')
            props.history.push('/login')        
        }
    }, [props.user])

    return (
        <h1>
            {props?.user?.name && (
               <span>{props.user.name}</span> 
            )}
            Hola 
        </h1>
    )
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, null)(Home)