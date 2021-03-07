import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import ProdukList from './ProdukList'
import Api from './Api'

class DaftarProduk extends Component {

    state = {
        produk:[]
    }

    componentDidMount = async() => {
        await Api.get('outletGet')
        .then(response => this.setState({
            produk:response.data.data
        }))
        console.log(this.state)
    }

    renderData(){
        return this.state.produk.map( 
            produk => <ProdukList produk={produk} key={produk.id} refresh={this.componentDidMount} /> );
    }
 
    render(){
        // const cek = this.state.produk.map((produk) =>
        //     rerun
        // ) 

        return (
            <Container>
                <Row>
                    { this.renderData() }
                </Row>
            </Container>
        )
    }
}

export default DaftarProduk
