import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";


function RenderHospital({hospital}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={hospital.image} alt={hospital.name} />
                <CardBody>
                    <CardText>{hospital.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}> 
                            <p>{comment.text} <br />
                                --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', 
                                month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} 
                            </p> 
                        </div>
                    )})
                }
            </div>
        );
    }
    return <div />
}

const HospitalInfo = (props) => {
    if(props.hospital) {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active> {props.hospital.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <h2> {props.hospital.name} </h2>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderHospital hospital={props.hospital} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />

}

export default HospitalInfo;