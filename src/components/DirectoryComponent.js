import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

function RenderDirectoryItem({ hospital, onClick }) {
  return (
    <Card onClick={() => onClick(hospital.id)}>
      <CardImg width='100%' src={hospital.image} alt={hospital.name} />
      <CardImgOverlay>
        <CardTitle>{hospital.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Directory = (props) => {
    const directory = props.hospitals.map( hospital => {
        return (
          <div key={hospital.id} className='col-md-5 m1'>
            <RenderDirectoryItem hospital={hospital} onClick={props.onClick} />
          </div>
        );
    });

    return (
        <div className='container'>
            <div className='row'>{directory}</div>
        </div>
    );
}

export default Directory;