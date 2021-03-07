import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Api from '../pages/Api'


class Detailtransaksi extends Component {

    state = {
        detail:[],
        bayar:[],
        paket:[],
        cek_id:this.props.match.params.id
    }

    async componentDidMount(){
        await Api.get('transaksiDetail/'+this.props.match.params.id)
        .then(response => this.setState({
            detail:response.data.data
        }));

        await Api.get('bayarDetail/'+this.props.match.params.id)
        .then(response => this.setState({
            bayar:response.data.data
        }))

        await Api.get('getPaket')
        .then(response => this.setState({
            paket:response.data.data
        }));


        console.log(this.state);

    }

    renderDetail(){
        return this.state.detail.map( 
            produk => 
            <div className="card-body" >
                <h3>Detail</h3>
                    <table>
                        <tr>
                            <th>Kode invoice : {produk.kode_invoice}</th>
                            <td style={{paddingLeft:100}} >{produk.tgl}</td>
                        </tr> 
                        <tr>
                            <td>Tanggal Bayar : {produk.tgl_bayar}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Batas waktu : {produk.batas_waktu}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Biaya Tambahan : Rp.{produk.biaya_tambahan}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Diskon : {produk.diskon} %</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Pajak : {produk.pajak} %</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>status : {produk.status}</td>
                            <td></td>
                        </tr>
                        <tr>
                            {this.renderBayar()}
                        </tr>
                        { produk.dibayar == null ? (
                            <tr>
                                <button onSubmit={this.handlerSubmit} className="btn btn-danger" >Konfirmasi</button>
                                
                            </tr>
                        ) : (
                            <button className="btn btn-primary" >Dibayar</button>
                        ) }
                    </table>
                </div>
            );
    }

    renderData(){
        return this.state.detail.map(
            produk =>
            <div className="card-body" >
                 <h3></h3>
                <p>Nama : {produk.nama}
                <br></br>
                Alamat : {produk.alamat}
                <br></br>
                Telepon : {produk.tlp}
                </p>
            </div>
        )
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    renderBayar(){
        if(this.state.bayar === "failed"){
           return (
               <tr>
                   <td> Paket : </td>
                   <td> 
                       <select onChange={this.handlerChange} name="id_paket" className="form-control" >
                           <option value="" >----</option>
                        {this.state.paket.map(
                            produk =>
                            <option value={produk.id} >{produk.nama_paket}</option>
                        )}
                       </select> </td>
               </tr>
           )
        }else{
            console.log("y")
        }
    }

    render() {

        return (
                <Container>
                    <br></br>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Detail Transaksi</li>
                        </ol>
                    </nav>
                    
                    <Row>
                        <div className="col col-md-6 card" style={{ margin: 5 }} >
                            {this.renderDetail()}
                        </div>

                        <div className="col col-md-3 card" style={{ margin: 5, height:150 }} >
                            {this.renderData()}
                        </div>
                    </Row>
                    
                </Container>
        )
    }
}

export default Detailtransaksi
