import React from 'react'

function ListMember({produk,refresh}) {

    return (
        <div>
            <select name="id_member" className="form-control">
                <option value="" >-- Member --</option>
                <option value={produk.id} >{produk.nama}</option>
            </select> 
        </div>
    )
}
export default ListMember
