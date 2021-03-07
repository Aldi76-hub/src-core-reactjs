import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Api from '../pages/Api'
// import { LevelHeader as Lhead } from './Navbar'

class Header extends Component {

    state = {
        userLevel:[]
    }

    onLogoutHandler = () => {
        localStorage.setItem("isLoggedIn",false);
        localStorage.setItem("userData",JSON.stringify(""));
        // this.renderData()
        // localStorage.clear();
        // this.setState({
        //   navigate: true,
        // });
      };

    componentDidMount = async() => {
        const user = JSON.parse(localStorage.getItem("userData"));

        await Api.get('get-level/'+user)
        .then(response => this.setState({
            userLevel:response.data
        }))
        console.log(this.state)

        // const userLe = this.state.userLevel;

        // if(userLe === "owner"){
        //     console.log("Y")
        // }else{
        //     console.log("T")
        // }
    }

    renderData(){
        const cek_login = JSON.parse(localStorage.getItem("isLoggedIn"));
        if(cek_login === true){
            return (<button 
                className="btn btn-danger" 
                onClick={this.onLogoutHandler} >Logout</button>)
        }else if(cek_login === false){
            return (
            <div>
            <Link to="/Login" className="btn btn-info" >Login</Link>
            
            |

            <Link to="/Register" className="btn btn-success" >Register</Link>
            </div>
            // |

            // <button className="btn btn-primary" >Register</button>
                )
        }
    }

    renderLevel(){
        const user = JSON.parse(localStorage.getItem("userData"));
        const cek_login = JSON.parse(localStorage.getItem("isLoggedIn"));
        const status = this.state.userLevel;

        if(cek_login === true){

            if(status === "owner"){
                return (

                    <div class="navbar-nav">
                        <Link to='/'  class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Laporan</Link>
                    </div>

                )
            }else if(status === "admin"){
                return (

                    <div class="navbar-nav">
                        <Link to='/'  class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                        {/* <Link to='/home2' class="nav-item nav-link" >Kategori</Link>
                        <Link to='/DaftarProduk' class="nav-item nav-link" >Produk</Link> */}
                        <Link to='/AddProduk' class="nav-item nav-link" >Tambah Outlet</Link>
                        {/* <Link to='/module_c' class="nav-item nav-link" >Modul c</Link>
                        <Link to='/dataProduk' class="nav-item nav-link" >Data</Link> */}
                        <Link to='/Outlet' class="nav-item nav-link" >Outlet</Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Member</Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Paket Cuci</Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Transaksi</Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Laporan</Link>
                    </div>

                )

            }else if(status === "kasir"){
                return (

                    <div class="navbar-nav">
                        <Link to='/'  class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Member</Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Transaksi</Link>
                        <Link to='/DaftarMember' class="nav-item nav-link" >Laporan</Link>
                    </div>

                )

            }
        }else if(cek_login === false){
            return (

                    <div class="navbar-nav">
                        <Link to='/'  class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                    </div>

            )
        }
        
    }

    // renderData(){
    //     return this.state.produk.map( 
    //         userLevel => <Lhead userLevel={userLevel} key={userLevel.id} refresh={this.componentDidMount} /> );
    // }

    render(){

        // const user = JSON.parse(localStorage.getItem("userData"));
        // const cek_login = JSON.parse(localStorage.getItem("isLoggedIn"));
        // console.log(cek_login)
        // console.log(user)

        // if(cek_login === true){
        //     console.log("log")
        // }else if(cek_login === false){
        //     console.log("relog")
        // }

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button type="button" class="btn btn-primary">
                        Laundry <span class="badge badge-light">7</span>
                    </button>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {this.renderLevel()}
                    </div>
    
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item" >

                        {this.renderData()}

                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
    
}

export default Header;
