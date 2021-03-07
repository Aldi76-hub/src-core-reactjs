import React, { Component } from 'react'
import Api from './Api'
import swal from 'sweetalert'

export class EditProduk extends Component {

    state = {
        id: '',
        produk: '',
        harga: '',
        stok: ''
    }

    async componentDidMount() {
        await Api.get('siswaDetail/' + this.props.match.params.id)
            .then(res => this.setState({
                produk: res.data.siswa.nama,
                harga: res.data.siswa.harga,
                stok: res.data.siswa.stok
            }))
        console.log(this.state)
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
        await Api.put('siswaEdit/'+this.props.match.params.id, this.state)
        this.berhasil()
    }

    berhasil() {
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        }).then(this.props.history.push('/DaftarProduk'));
    }



    // componentDidMount() {
    //     // const id = this.props.match.params.id
    //     // const res = await axios.get('http://localhost:8000/api/siswaDetail/'+id)

    //     // this.setState({
    //     //     id:res.data.id,
    //     //     produk:res.data.nama,
    //     //     harga:res.data.harga,
    //     //     stok:res.data.stok
    //     // })

    //     axios.get('http://localhost:8000/api/siswaDetail/' + this.props.match.params.id)
    //         .then(res => {
    //             this.setState({
    //                 produk: res.data.nama,
    //                 harga: res.data.harga,
    //                 stok: res.data.stok
    //             });
    //             console.log(this.props.match.params.id)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    render() {

        const { produk, harga, stok } = this.state

        return (
            <div className="container" >

                <h2>Edit produk</h2>

                <form onSubmit={this.handlerSubmit} >
                    <table>
                        <tbody>
                            <tr>
                                <th>Produk</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} value={produk} name="produk" className="form-control" type="text" /></td>
                            </tr>
                            <tr>
                                <th>Harga</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} value={harga} name="harga" className="form-control" min="1" type="number" /></td>
                            </tr>
                            <tr>
                                <th>stok</th>
                                <td>:</td>
                                <td><input onChange={this.handlerChange} value={stok} name="stok" className="form-control" min="1" type="number" /></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td></td>
                                <td><input name="edit" value="Edit" className="btn btn-primary" type="submit" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default EditProduk
