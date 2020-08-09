import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderHospital({hospital}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={baseUrl + hospital.image} alt={hospital.name} />
                <CardBody>
                    <CardText>{hospital.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

// Create the comment form
class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      rating: '',
      author: '',
      text: '',
      touched: {
        author: false,
      }
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(
      this.props.hospitalId,
      values.rating,
      values.author,
      values.text
    );
  }

  // Set Modal Module
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        {/* Reactstrap button with the text "Submit Comment" on it */}
        <Button outline onClick={this.toggleModal}>
          <i className='fa fa-pencil fa-lg' />
          Submit Comment
        </Button>

        {/* Create the Submit Comment Modal */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader className='bg-primary text-light' toggle={this.toggleModal}>
            <h3>Submit Comment</h3>
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className='form-group'>
                <Label htmlFor='rating' md={2}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    id='rating'
                    model='.rating'
                    className='form-control'
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className='form-group'>
                <Col>
                  <Label htmlFor='author'>Your Name</Label>
                  <Control.text
                    id='author'
                    model='.author'
                    name='author'
                    placeholder='Your Name'
                    className='form-control'
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className='text-danger'
                    model='.author'
                    show='touched'
                    component='div'
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col>
                  <Label htmlFor='author'>Comment</Label>
                  <Control.textarea
                    id='text'
                    model='.text'
                    name='text'
                    rows='6'
                    className='form-control'
                  />
                </Col>
              </Row>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderComments({ comments, addComment, hospitalId }) {
  if (comments) {
    return (
      <React.Fragment>
        <div className='col-md-5 m-1'>
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>
                  {comment.text} <br />
                  --{comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            );
          })}
          <CommentForm hospitalId={hospitalId} addComment={addComment} />
        </div>
      </React.Fragment>
    );
  }
  return <div />;
}

function HospitalInfo(props) {
  if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    if(props.hospital) {
        return (
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to='/directory'>Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    {" "}
                    {props.hospital.name}{" "}
                  </BreadcrumbItem>
                </Breadcrumb>
                <h2> {props.hospital.name} </h2>
                <hr />
              </div>
            </div>
            <div className='row'>
              <RenderHospital hospital={props.hospital} />
              <RenderComments
                comments={props.comments}
                addComment={props.addComment}
                hospitalId={props.hospital.id}
              />
            </div>
          </div>
        );
    }
    return <div />

}

export default HospitalInfo;