import React, { Component } from 'react'
import { Jumbotron, Container, Row, Form } from 'react-bootstrap' 

export class ModulC extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1>Welcome to Geek Bot!</h1>
                        <p>Check Out our latest product that might be what you need for your next project in our product gallery </p>
                    </Container>
                </Jumbotron>
                <div className="shadow" >
                    <Row>
                        <Container>
                            <div className="col-md-10 col-sm-10 col-lg-10">
                                <Row>
                                    <h1>Geek Bot Shop</h1>
                                </Row>
                            </div>
                        </Container>
                    </Row>
                    <Form>
                        <input type="hidden" name="customer" value="1"/>
                        <input type="hidden" name="orderdate" value="2014-3-31"/>
                        <div className="shop-box" >
                            <ul className="shop-list" >
                                <li>
                                    <Row>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                        <h3>
                                            <strong>
                                                <span class="idproduk">1001</span> - <span class="namabarang">arquino</span>
                                            </strong>
                                        </h3>
                                            1 / blue / 2012-3-3
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                            @Rp. <span class="harga_produk">120000</span>
                                            <br/>kategori
                                        </div>
                                        <div className ="col-md-2 col-sm-2 col-lg-2">
                                            <input type="number" name="jumlahbarang" value="0" onchange="" autocomplete="off" min="0"/>
                                            <h4><strong>Rp. <span class="harga">0</span> </strong></h4>
                                        </div>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                        <h3>
                                            <strong>
                                                <span class="idproduk">1001</span> - <span class="namabarang">arquino</span>
                                            </strong>
                                        </h3>
                                            1 / blue / 2012-3-3
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                            @Rp. <span class="harga_produk">120000</span>
                                            <br/>kategori
                                        </div>
                                        <div className ="col-md-2 col-sm-2 col-lg-2">
                                            <input type="number" name="jumlahbarang" value="0" onchange="" autocomplete="off" min="0"/>
                                            <h4><strong>Rp. <span class="harga">0</span> </strong></h4>
                                        </div>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                        <h3>
                                            <strong>
                                                <span class="idproduk">1001</span> - <span class="namabarang">arquino</span>
                                            </strong>
                                        </h3>
                                            1 / blue / 2012-3-3
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                            @Rp. <span class="harga_produk">120000</span>
                                            <br/>kategori
                                        </div>
                                        <div className ="col-md-2 col-sm-2 col-lg-2">
                                            <input type="number" name="jumlahbarang" value="0" onchange="" autocomplete="off" min="0"/>
                                            <h4><strong>Rp. <span class="harga">0</span> </strong></h4>
                                        </div>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                        <h3>
                                            <strong>
                                                <span class="idproduk">1001</span> - <span class="namabarang">arquino</span>
                                            </strong>
                                        </h3>
                                            1 / blue / 2012-3-3
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-lg-4" >
                                            @Rp. <span class="harga_produk">120000</span>
                                            <br/>kategori
                                        </div>
                                        <div className ="col-md-2 col-sm-2 col-lg-2">
                                            <input type="number" name="jumlahbarang" value="0" onchange="" autocomplete="off" min="0"/>
                                            <h4><strong>Rp. <span class="harga">0</span> </strong></h4>
                                        </div>
                                    </Row>
                                </li>
                            </ul>
                        </div>
                    </Form>
                </div>
                
            </div>
        )
    }
}

export default ModulC
