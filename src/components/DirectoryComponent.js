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
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

function RenderDirectoryItem({ hospital }) {
  return (
    <Card>
      <Link to={`/directory/${hospital.id}`}>
        <CardImg width='100%' src={baseUrl + hospital.image} alt={hospital.name} />
        <CardImgOverlay>
          <CardTitle>{hospital.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Directory = (props) => {
    const directory = props.hospitals.hospitals.map( hospital => {
        return (
          <div key={hospital.id} className='col-md-5 m1'>
            <RenderDirectoryItem hospital={hospital} />
          </div>
        );
    });

    if (props.hospitals.isLoading) {
      return (
        <div className='container'>
          <div className='row'>
            <Loading />
          </div>
        </div>
      );
    }

    if (props.hospitals.errMess) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h4>{props.hospital.errMess}</h4>
            </div>
          </div>
        </div>
      );
    }

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