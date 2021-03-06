import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody, CardImg, CardTitle, CardText, Button
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

// Rendering Card in the home page
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4> {errMess} </h4>
  }

  return (
    <Card>
      <CardImg src={baseUrl + item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}


const items = [
  {
    src: '/assets/images/clasped-hands-541849.jpg',
    caption: 'Slide 1'
  },
  {
    src: '/assets/images/black-female-face-mask.jpg',
    caption: 'Slide 2'
  },
  {
    src: '/assets/images/shutterstock_485118664.jpg',
    caption: 'Slide 3'
  },
  {
    src: '/assets/images/shopprotect2.jpg',
    caption: 'Slide 4'
  },
  {
    src: '/assets/images/portrait1.jpg',
    caption: 'Slide 5'
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            className='carousel-item'
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionHeader={item.caption} />
          </CarouselItem>
    );
  });

  return (
    <React.Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
          className='carouSlider'
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
      {/* Setup the card */}
      <div className='container py-5 boxes'>
        <div className='row'>
          <div className='col-md-3 mb-3'>
            <Card className='border-primary text-center text-white'>
              <CardBody className='card-body'>
                <CardImg
                  src='/assets/images/person1.jpg'
                  width='60%'
                  className='rounded-circle'
                />
                <h3 className='text-primary'>Good Care</h3>
                <p className='text-muted'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae, dolore.
                </p>
                <Button className='btn-dark mx-auto'>En Savoir Plus</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-3 mb-3'>
            <Card className='card bg-info text-center text-white'>
              <CardBody className='card-body'>
                <CardImg
                  src='/assets/images/person1.jpg'
                  width='60%'
                  className='rounded-circle'
                />
                <h3>Real Dreem</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae, dolore.
                </p>
                <Button className='btn-light mx-auto'>En savoir Plus</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-3 mb-3'>
            <Card className='card border-primary text-center text-white'>
              <CardBody className='card-body'>
                <CardImg
                  src='/assets/images/person1.jpg'
                  width='60%'
                  className='rounded-circle'
                />
                <h3 className='text-primary'>Drama Free</h3>
                <p className='text-muted'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae, dolore.
                </p>
                <Button className='btn-dark mx-auto'>En savoir Plus</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-3 mb-3'>
            <Card className='card bg-info text-center text-white'>
              <CardBody className='card-body'>
                <CardImg
                  src='/assets/images/person1.jpg'
                  width='60%'
                  className='rounded-circle'
                />
                <h3>Feeling Good</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repudiandae, dolore.
                </p>
                <Button className='btn-light mx-auto'>En savoir Plus</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      {/* NEWSLETTER SECTION TO SUBSCRIBE */}
      <div className='text-white py-5 newsletter'>
        <div className='container'>
          <div className='row pb-3'>
            <div className='col text-center'>
              <h3>Abonnez-vous à notre newsletter</h3>
              <p className='latestPost'>
                Soyez toujours au courant des dernièrs nouvelles et recevez des
                infos concernant les médecins et services à votre disposition.
              </p>
              <form className='form-inline justify-content-center'>
                <input
                  type='text'
                  className='form-control mb-2 mr-2'
                  placeholder='Votre Nom'
                />
                <input
                  type='email'
                  className='form-control mb-2 mr-2'
                  placeholder='Votre Email'
                />
                <button type='submit' className='btn btn-secondary mb-2'>
                  <i className='fa fa-envelope-open' /> Souscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
            <RenderCard 
              item={props.promotion} 
              isLoading={props.promotionLoading}
              errMess={props.promotionErrMess} />
          </div>
          <div className='col-md m-1'>
            <RenderCard
              item={props.partner}
              isLoading={props.partnerLoading}
              errMess={props.partnerErrMess} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
