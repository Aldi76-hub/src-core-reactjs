import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Api from '../pages/Api'

class Crud extends Component {

    state = {
        transaksi:[]
    }

    componentDidMount = async() => {
        await Api.get("transaksiGet")
        .then(response => this.setState({
            transaksi:response.data.data
        }))
        console.log(this.state)
    }

    renderData(){
        return this.state.transaksi.map( 
            produk => 
            <div className="card col-md-3">
                <div className="card-body">
                    <h5 className="card-title">{produk.nama}</h5>
                    <p className="card-title" >Alamat : {produk.alamat}</p>
                    <p className="card-text">Tanggal : {produk.tgl}
                    <br/> Batas   : {produk.batas_waktu}</p>
                    <Link to={"/detailTransaksi/"+produk.id_transaksi} href="#" class="btn btn-warning">Detail Transaksi</Link>
                </div>
            </div>  
            );
        
    }

    render() {
        return (
            <div>
                <Container>
                    <br></br>
                    <Row>
                        <Link to="/transaksi" className="btn btn-info" >Tambah</Link>
                    </Row>
                    <br></br>
                    <Row>
                        {this.renderData()}
                        {/* <table class="table table-striped table-bordered shadow">
                            <tr>
                                <th>Invoice</th>
                            </tr>
                        </table> */}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Crud
