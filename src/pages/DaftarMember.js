import React, { Component } from 'react'
import Api from './Api'
import MemberList from './MemberList'

class DaftarMember extends Component {

    state = {
        produk:[]
    }

    componentDidMount = async() => {
        await Api.get('memberGet')
        .then(response => this.setState({
            produk:response.data.data
        }))
        console.log(this.state)
    }

    renderData(){
        return this.state.produk.map( 
            produk => <MemberList produk={produk} key={produk.id} refresh={this.componentDidMount} /> );
    }

    render() {
        return (
            <div className="container" >
                {/* <div className="row" > */}
                    {this.renderData()}
                {/* </div> */}
            </div>
        )
    }
}

export default DaftarMember
