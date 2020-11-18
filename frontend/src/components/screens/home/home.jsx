import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import CategoriesService from '../../../services/categoriesService'
import CardComponent from '../../common/categories-card/categories-card'
import './home.scss'

const Home = (props) => {
    const categoriesService = new CategoriesService()
    const categories = categoriesService.getCategories()

    useEffect(() => {
        if (props.user === undefined) {
            props.history.push('/login')
        }
    }, [props.user])

    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm='8'>
                        <div className="container-cards">
                            <h3 className="cards-title">Categorias de publicaciones</h3>
                            <div className="cards p-3">
                                {categories && categories.map((element, index) => {
                                    return (
                                        <CardComponent title={element.title} description={element.description} link={element.link} />
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <div className="container-progress">
                            <h3 className='progress-title'>Progreso</h3>
                            {console.log(props.user)}
                            <h4>Puntaje: { props?.user?.points !== undefined && ( <span>{props.user.points}</span> ) } </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, null)(Home)