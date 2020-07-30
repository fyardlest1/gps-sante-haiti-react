import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDirectoryItem({ hospital }) {
  return (
    <Card>
      <Link to={`/directory/${hospital.id}`}>
        <CardImg width='100%' src={hospital.image} alt={hospital.name} />
        <CardImgOverlay>
          <CardTitle>{hospital.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Directory = (props) => {
    const directory = props.hospitals.map( hospital => {
        return (
          <div key={hospital.id} className='col-md-5 m1'>
            <RenderDirectoryItem hospital={hospital} />
          </div>
        );
    });

    return (
        <div className='container'>
          <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Hospital</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Hospital</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>{directory}</div>
        </div>
    );
}

export default Directory;