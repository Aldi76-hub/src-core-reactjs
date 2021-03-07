import React,{ Component }from 'react'
import { Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {

    state = {
        navigate:false
    }
    render(){

        const user = JSON.parse(localStorage.getItem("userData"));
        const login = localStorage.getItem("isLoggedIn");

        console.log(user);
        console.log(login)

        return (
            <Container>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Link to='' className="btn btn-primary btn-lg" role="button">Learn more</Link>
                    </p>
                </div>
            </Container>
        )
    }
}

