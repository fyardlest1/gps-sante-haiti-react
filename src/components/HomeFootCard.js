import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function HomeFoot(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md m-1'>
          <RenderCard
            item={props.hospital}
            isLoading={props.hospitalsLoading}
            errMess={props.hospitalsErrMess}
          />
        </div>
        <div className='col-md m-1'>
          <RenderCard item={props.promotion} />
        </div>
        <div className='col-md m-1'>
          <RenderCard item={props.partner} />
        </div>
      </div>
    </div>
  );
}

export default HomeFoot;
