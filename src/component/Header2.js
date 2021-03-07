import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Api from '../pages/Api'

class Header2 extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button type="button" class="btn btn-primary">
                        Laundry <span class="badge badge-light"></span>
                    </button>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav" >
                            <Link to='/' class="nav-item nav-link active" >Home</Link>
                            <Link to='/crud' class="nav-item nav-link" >CRUD</Link>
                        </div>
                    </div>
    
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item" >

                        

                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header2

