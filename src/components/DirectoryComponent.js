import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHospital: null
        };
    }

    // Event hendler for selected hospital
    onSelectHospital(hospital) {
        this.setState({selectedHospital: hospital});
    }

    renderSelectedHospital(hospital) {
        if(hospital) {
            return (
              <Card>
                <CardImg top src={hospital.image} alt={hospital.name} />
                <CardBody>
                  <CardTitle>{hospital.name}</CardTitle>
                  <CardText>{hospital.description}</CardText>
                </CardBody>
              </Card>
            );            
        }
    }

    render() {
        const directory = this.props.hospitals.map( hospital => {
            return (
              <div key={hospital.id} className='col-md-5 m1'>
                <Card onClick={() => this.onSelectHospital(hospital)}>
                  <CardImg top src={hospital.image} alt={hospital.name} />
                  <CardImgOverlay>
                    <CardTitle>{hospital.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {directory}
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-5 m-1">
                            {this.renderSelectedHospital(this.state.selectedHospital)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;