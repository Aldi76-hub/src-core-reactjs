import React, { Component } from 'react'
import Api from './Api'
import axios from 'axios'
import swal from 'sweetalert'
import { Container } from 'react-bootstrap'

export class AddProduk extends Component {

    state = {
        nama: '',
        alamat: '',
        tlp: ''
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state)
        // await Api.post('siswaPost',this.state)
        // .then(res => { console.log(res) })
        // .catch(err => { console.log(err) })
        await Api.post('outletTambah', this.state).then(res => {
            this.berhasil()
        }).then(err => {
            console.log(err)
        })

    }

    // kosong = () => {
    //     this.setState({
    //         produk: null,
    //         stok: null,
    //         harga: null
    //     })
    // }

    berhasil = () => {
        swal("Data ditambahkan")
            .then(this.props.history.push('/Outlet'));

    }

    render() {
        return (
            <div className="container" >

                <h2>Tambah Outlet</h2>

                <form onSubmit={this.handlerSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <th>Nama</th>
                                <td>:</td>
                                <td><input name="nama" onChange={this.handlerChange} className="form-control" type="text" /></td>
                            </tr>
                            <tr>
                                <th>Alamat</th>
                                <td>:</td>
                                <td><input name="alamat" onChange={this.handlerChange} className="form-control" type="text" /></td>
                            </tr>
                            <tr>
                                <th>Tlp</th>
                                <td>:</td>
                                <td><input name="tlp" onChange={this.handlerChange} className="form-control" min="1" type="number" /></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                                <td><input name="tambah" value="Tambah" className="btn btn-primary" type="submit" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default AddProduk
