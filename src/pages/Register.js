import React, { Component } from 'react'
import { Container, Row, Form, FormGroup } from 'react-bootstrap'
import Api from './Api'
import swal from 'sweetalert'

export default class Register extends Component {

    userData;
    constructor(props){
        super(props);
        this.state = {
            daftar:{
                nama:"",
                username:"",
                password:"",
                level:"",
                isLoading:""
            },
            msg:"",
        };
    }

    onChangehandler = (e, key) => {
        const { daftar } = this.state;
        daftar[e.target.name] = e.target.value;
        this.setState({ daftar });
    };

    onSubmitHandler = async(e) => {
        e.preventDefault();
        // this.state({isLoading:true});

        await Api.post('daftar', this.state.daftar)
        .then((response) => {
            this.setState({isLoading:false});
            if(response.data.status === 200){
                this.setState({
                    msg:response.data.message,
                    
                });
                console.log(this.state)
                this.berhasil()
                setTimeout(() => {
                    this.setState({msg:""});
                },2000)
            }

            if(response.data.status === 'failed'){
                this.setState({msg:response.data.message});
                setTimeout(() => {
                    this.setState({msg:""});
                },2000)
            }
        })
    }

    berhasil(){
        swal("Daftar berhasil", {
            icon: "success",
        }).then(this.props.history.push('/Login'));
    }

    render(){
        const isLoading = this.state.isLoading;

        return (
            <Container>
                <Row>
                    <Form className="card-body col-md-4 shadow">
                        <div>
                            <FormGroup>
                                <label>Nama</label>
                                <input
                                    type="text"
                                    name="nama"
                                    autoComplete="off"
                                    className="form-control" 
                                    value={this.state.daftar.nama}
                                    onChange={this.onChangehandler} />
                            </FormGroup>
                            <FormGroup>
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete="off"
                                    className="form-control" 
                                    value={this.state.daftar.username}
                                    onChange={this.onChangehandler} />
                            </FormGroup>
                            <FormGroup>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={this.state.daftar.password}
                                    onChange={this.onChangehandler} />
                            </FormGroup>
                            <FormGroup>
                                <label>User</label>
                                <select name="role" className="form-control" onChange={this.onChangehandler} >
                                    <option value="admin" >Admin</option>
                                    <option value="kasir" >Kasir</option>
                                    <option value="owner" >Owner</option>
                                </select>
                                {/* <input
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    className="form-control" 
                                    value={this.state.daftar.email}
                                    onChange={this.onChangehandler} /> */}
                            </FormGroup>
                            <button 
                                className="btn btn-primary" 
                                onClick={this.onSubmitHandler}
                            >
                            Daftar
                            {isLoading ? (
                            <span
                                className="spinner-border spinner-border-sm ml-5"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            ) : (
                            <span></span>
                            )}
                            </button>
                        </div>
                    </Form>
                </Row>
            </Container>
        )
    }
}


