import { createFactory } from "react";

import React from 'react'
import { Card } from '../component'

export default function Home2() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <Card />
                </div>
                <div className="col-lg-4">
                    <Card />
                </div>
                <div className="col-lg-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}
