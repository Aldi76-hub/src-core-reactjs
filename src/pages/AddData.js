import React, { Component } from 'react'
import Api from './Api'

export class AddData extends Component {

    state = {
        nama : '',
        berat: '',
        warna:'',
        harga:'',
        kategori:''
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handlerSubmit = async(event) => {
        event.preventDefault();
        console.log(this.state);

        await Api.post('produk-tambah',this.state).then((res) => {
            console.log('berhasil');
        }).then((err) => {
            
        })
    }

    render() {
        return (
            <div className="container shadow" >

                <h2>Tambah produk</h2>

                <form onSubmit={this.handlerSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <th>Nama</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} name="nama" className="form-control" type="text" /></td>
                            </tr>
                            <tr>
                                <th>Berat</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} name="berat" className="form-control" min="1" type="number" /></td>
                            </tr>
                            <tr>
                                <th>Warna</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} name="warna" className="form-control" min="1" type="text" /></td>
                            </tr>
                            
                            <tr>
                                <th>Harga Produksi</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} name="harga" className="form-control" min="1" type="number" /></td>
                            </tr>
                            <tr>
                                <th>Kategori</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} name="kategori" className="form-control" min="1" type="text" /></td>
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

export default AddData
