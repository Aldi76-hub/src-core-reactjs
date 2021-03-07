import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Api from './Api'

export class DataProduk extends Component {

    state = {
        produk:[]
    }

    componentDidMount = async() => {
        await Api.get('produk-get')
        .then(response => this.setState({
            produk:response.data.produk
        }))
        console.log(this.state)
    }

    renderData = () => {
        return this.state.produk.map(
            
        )
    }

    render() {
        return (
            <div className="container col-md-9 col-sm-9 col-lg-9 admin-box" >
                <br/>
                <br/>
                <Link to="/addData" class="btn btn-primary">Add Product</Link>
                <br/>
                <br/>
                <Row>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Berat</th>
                                <th>Warna</th>
                                <th>Tanggal Produksi</th>
                                <th>Harga Produk</th>
                                <th colSpan="2" >Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.renderData} */}
                        </tbody>
                    </table>
                </Row>
            </div>
        )
    }
}

export default DataProduk