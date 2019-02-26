import React from 'react';
import { Col, Glyphicon, Image, Button, Checkbox } from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    
    if(this.props.products){
      this.state = this.props.products
    }
  }

  render() {
    return (
      <Col sm={6} md={4}>
        <Col md={12} className="product-content">
          <Col md={12} className="product-name">
            <h5>{this.state.name}</h5>
          </Col>
          <Col md={12} className="product-rate border-top">
            <Col md={6} className="text-center">
              Advertised rate
              <h3>{this.state.advertisedRate}%</h3>
            </Col>
            <Col md={6} className="text-center">
              Comparison rate
              <h3>{this.state.comparisonRate}%</h3>
            </Col>
          </Col>
          <Col md={12} className="product-cons border-top">
            {[...Array(this.state.cons.length)].map((x, i) =>
              <div key={i}><Glyphicon glyph="ok" /> {this.state.cons[i]}</div>
            )}
          </Col>
          <Col md={12} className="border-top">
            <Col md={6}>
              <h5><Checkbox> Compare </Checkbox></h5>
            </Col>
            <Col md={6}>
              <h5><u>More Information</u></h5>
            </Col>
          </Col>
          <Col md={12} className="border-top">
            <Col md={6}>
              <Image src={this.state.company.logo} responsive />
            </Col>
            <Col md={6} className="text-right">
              <Button bsStyle="success" bsSize="large">Go to Site <Glyphicon glyph="menu-right" /></Button>
            </Col>
          </Col>
        </Col>
      </Col>
    )
  }
};

export default List