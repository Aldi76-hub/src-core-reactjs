import React, { Component } from 'react'
import { Container, Row, Form, FormGroup } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import Api from './Api'
import swal from 'sweetalert'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            msg: "",
            redirect:false,
            isLoading: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
        }
    }
    

    onChangehandler = (e, key) => {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    };
    
    onSignInHandler = async(e) => {
        e.preventDefault();
        alert(e);
        console.log(this.state.username+" "+this.state.password);

        await Api.post('login',this.state).then((response) => {
            if(response.data.status === 200){

                // console.log(response.data.data)
                localStorage.setItem("isLoggedIn",true);
                localStorage.setItem("userData",JSON.stringify(this.state.username));
                this.props.history.push('/');
                // swal("Login berhasil", {
                //     icon: "success",
                // })
            }
            if(response.data.status === 'failed'){
                swal("Login gagal", {
                    icon: "success",
                })
            }
        })
    };
    

    render() {

        // if(this.state.redirect){
        //     return <Redirect to="/home" />
        // }

        // const login = localStorage.getItem("isLoggedIn");
        // console.log(login);
        // if(login){
        //     return <Redirect to="/home" />
        // }

        // const isLoading = this.state.isLoading;

        return (
            <Container>
                <Row>
                    <Form onSubmit={this.onSignInHandler} className="card-body col-md-4 shadow">
                        <div>
                            <FormGroup>
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete="off"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangehandler}
                                />
                                <span className="text-danger">{this.state.msg}</span>
                                <span className="text-danger">{this.state.errMsgEmail}</span>
                            </FormGroup>
                            <FormGroup>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangehandler}
                                />
                                <span className="text-danger">{this.state.errMsgPwd}</span>
                            </FormGroup>
                            <p className="text-danger">{this.state.errMsg}</p>

                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="login"
                            />
                                
                            {/* {isLoading ? (
                            <span
                                className="spinner-border spinner-border-sm ml-5"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            ) : (
                            <span></span>
                            )} */}
                            
                        </div>
                    </Form>
                </Row>
            </Container>
        )
    }

}

