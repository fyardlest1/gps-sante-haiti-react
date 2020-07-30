import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class HospitalInfo extends Component {
    renderHospital(hospital) {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={hospital.image} alt={hospital.name} />
                    <CardBody>
                        <CardTitle>{hospital.name}</CardTitle>
                        <CardText>{hospital.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className='col-md-5 m-1'>
                    <h4>Comments</h4>
                    {comments.map(comment => <div key={comment.id}> <p>{comment.text} <br />--{comment.author} 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </p> </div>)}
                </div>
            );
        }
        return <div />
    }

    render() {
        if(this.props.hospital) {
            return (
                <div className='container'>
                    <div className='row'>
                        {this.renderHospital(this.props.hospital)}
                        {this.renderComments(this.props.hospital.comments)}
                    </div>
                </div>
            );
        }
        return <div />

    }
}


export default HospitalInfo;