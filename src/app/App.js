import { Header2 as He, Home, Crud, TambahTransaksi as transaksi, Detailtransaksi as detail } from '../component/'
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
        <He/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/crud" component={Crud} />
          <Route path="/transaksi" component={transaksi} />
          <Route path="/detailTransaksi/:id" component={detail} />
        </Switch>
      </div>
    );
  }
}

export default App;
