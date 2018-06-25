import React, { Component, Fragment } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
    state = {
        open: false
    };

    render() {
        return (
            <Fragment>
                <div>
                    <Button
                        className="item-details-buttom"
                        bsStyle="link"
                        onClick={() => {
                            this.setState({ open: !this.state.open });
                        }}
                    >
                        {this.state.open === false ? `See ` : `Hide `} items in
                        details
                        {this.state.open === false ? `+` : ` -`}
                    </Button>

                    <Collapse in={this.state.open}>
                        <div>
                            <Well>
                                <Media>
                                    <Media.Left>
                                        <img
                                            src="https://images-na.ssl-images-amazon.com/images/I/419B7MODwOL.jpg"
                                            alt="itemDetailsImage"
                                            width={"auto"}
                                            height={100}
                                        />
                                    </Media.Left>

                                    <Media.Body>
                                        <p>
                                            Apple MacBook Pro 15" Core i7 2.5GHz
                                            Retina (MGXC2LL/A), 16GB Memory,
                                            512GB Solid State Drive (Certified
                                            Refurbished)
                                        </p>
                                        <Row className="show-grid">
                                                <Col md={6}> 
                                                    <strong> {`$${this.props.price}`} </strong>
                                                 </Col>
                                                 <br/>
                                                 <strong className="price-stripe"> {`$${this.props.price}`} </strong>
                                                 <Col md={6}> 
                                                 Qty: 1
                                                 </Col>
                                        </Row>
                                    </Media.Body>
                                </Media>
                            </Well>
                        </div>
                    </Collapse>
                </div>
            </Fragment>
        );
    }
}
