import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import Subtotal from "./components/Subtotal/Subtotal";
import  PickupSavings  from "./components/PickupSavings/PickupSavings";
import  TaxesFees  from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal"

import "./App.css";

class App extends Component {
    state = {
        total: 100,
        PickupSavings: -3.85,
        taxes:0
    };
    render() {
        return (
            <div className="container">
                <Grid className=" purchased-card">
                    <Subtotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.PickupSavings}/>
                     <TaxesFees taxes={this.state.taxes.toFixed(2)}/>

                     <EstimatedTotal price={this.state.total.toFixed(2)}/>
                     <hr/>

                </Grid>
            </div>
        );
    }
}

export default App;
