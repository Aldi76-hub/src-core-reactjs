import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Api from './Api'

function ProdukList({ produk, refresh }) {

    function hapusProduk() {
        swal({
            title: "Anda Yakin?",
            text: "Data akan di hapus!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    validasi()
                } else {
                    swal("Data tidak dihapus!");
                }
            });
    }

    async function validasi() {
        await Api.delete('outletHapus/' + produk.id)
        return refresh()
        berhasil()
    }

    function berhasil() {
        swal("Data berhasil dihapus", {
            icon: "success",
        });
    }

    return (
        <div className="col col-md-3 card" style={{ margin: 5 }} >
            <div className="card-body" >
                <h3>{produk.nama}</h3>
                <p>Alamat: {produk.alamat}</p>
                <p>No tlp :{produk.tlp}</p>
                {/* <Link to={"/EditProduk/" + produk.id} className="card-link" >Edit</Link> */}
                <Link onClick={hapusProduk} className="card-link" >Hapus</Link>
            </div>
        </div>
    )
}

export default ProdukList