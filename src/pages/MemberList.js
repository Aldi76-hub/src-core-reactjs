import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import Api from './Api'

function MemberList({produk,refresh}) {
    return (
        <div>
            <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>JK</th>
                                <th>Tlp</th>
                                <th>Aksi</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{produk.nama}</td>
                                <td>{produk.alamat}</td>
                                <td>{produk.jk}</td>
                                <td>{produk.tlp}</td>
                                <td> <button className="btn btn-danger" >Hapus</button> </td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}

export default MemberList
