import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Api from '../pages/Api'
import ListMember from './ListMember'
import swal from 'sweetalert'

class TambahTransaksi extends Component {

    state = {
        member:[],
        kode_invoice:'',
        id_member:'',
        tgl:'',
        batas_waktu:'',
        biaya_tambahan:'',
        diskon:'',
        pajak:'',
        status:''

    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount = async() => {
        await Api.get("memberGet")
        .then(response => this.setState({
            member:response.data.data
        }))
        console.log(this.state)
    }

    renderData(){
        return this.state.member.map( 
            produk => 
            <select name="id_member" onChange={this.handlerChange} className="form-control">
                <option value="" >-- Pilih --</option>
                <option value={produk.id} >{produk.nama}</option>
            </select>    
                 );
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state)
        // await Api.post('siswaPost',this.state)
        // .then(res => { console.log(res) })
        // .catch(err => { console.log(err) })
        await Api.post('transaksiPost', this.state).then(res => {
            this.berhasil()
        }).then(err => {
            console.log(err)
        })

    }
    berhasil = () => {
        swal("Data ditambahkan")
            .then(this.props.history.push('/crud'));

    }

    render() {
        return (
            <div>
                <br></br>
                <Container>
                    <form onSubmit={this.handlerSubmit} >
                        <table>
                            <tbody>
                                <tr>
                                    <th>Kode</th>
                                    <td>:</td>
                                    <td><input name="kode_invoice" onChange={this.handlerChange} className="form-control" type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Nama</th>
                                    <td>:</td>
                                    <td>
                                        {this.renderData()}
                                    </td>
                                </tr>
                                <tr>
                                    <th>tgl</th>
                                    <td>:</td>
                                    <td><input name="tgl" onChange={this.handlerChange} className="form-control" type="date" /></td>
                                </tr>
                                <tr>
                                    <th>Batas</th>
                                    <td>:</td>
                                    <td><input name="batas_waktu" onChange={this.handlerChange} className="form-control" min="1" type="date" /></td>
                                </tr>
                                <tr>
                                    <th>Biaya tambah</th>
                                    <td>:</td>
                                    <td><input name="biaya_tambahan" onChange={this.handlerChange} className="form-control" min="1" type="number" /></td>
                                </tr>
                                <tr>
                                    <th>Diskon</th>
                                    <td>:</td>
                                    <td><input name="diskon" onChange={this.handlerChange} className="form-control" min="1" type="number" /></td>
                                </tr>
                                <tr>
                                    <th>Pajak</th>
                                    <td>:</td>
                                    <td><input name="pajak" onChange={this.handlerChange} className="form-control" min="1" type="number" /></td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>:</td>
                                    <td>
                                        <select name="status" className="form-control" onChange={this.handlerChange} >
                                            <option value="baru" >Baru</option>
                                            <option value="proses" >Proses</option>
                                            <option value="selesai" >Selesai</option>
                                            <option value="diambil" >Diambil</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td><input name="tambah" value="Tambah" className="btn btn-primary" type="submit" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </Container>
            </div>
        )
    }
}

export default TambahTransaksi
