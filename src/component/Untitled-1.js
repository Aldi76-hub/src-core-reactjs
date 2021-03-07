import { Header as He } from '../component'
import { AddProduk, Home, EditProduk, ModulC, DaftarMember } from '../pages'
import { Home2, Login, Register, DataProduk, AddData, Outlet } from '../pages'
import { DaftarProduk as list } from '../pages'
import { AddProduk as tambah } from '../pages'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'
import ReactDom from 'react-dom'


class App extends Component {

  render() {
    // const user = JSON.parse(localStorage.getItem("userData"));
    // console.log(user.nama);
    return (
      <div className="App">
        {/* <h1>{user.nama}</h1> */}
        <He />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home2" component={Home2} />
          <Route path="/DaftarProduk" component={list} />
          <Route path="/AddProduk" component={AddProduk} />
          <Route path="/EditProduk/:id" component={EditProduk}></Route>
          <Route path="/Login" component={Login} ></Route>
          <Route path="/Register" component={Register} ></Route>
          <Route exact path="/module_c" component={ModulC} ></Route>
          <Route path="/dataProduk" component={DataProduk} ></Route>
          <Route path="/addData" component={AddData} ></Route>
          <Route path="/Outlet" component={list} ></Route>
          <Route path="/DaftarMember" component={DaftarMember} ></Route>
          {/* <Route path="/HapusProduk/:id" ></Route> */}
        </Switch>

      </div>
    );
  }
}

export default App;
