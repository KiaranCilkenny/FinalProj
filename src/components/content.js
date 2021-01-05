import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap';

export class Content extends React.Component {

  render() {
    return (
      <Container>
        <div>
          <h1>Do you what Time it is? </h1>
          <h2> {new Date().toLocaleTimeString()}.</h2>
          <h1>Time to Workout! </h1>


          {/* Beginning of Carousel Slideshow  */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://themusclephd.com/wp-content/uploads/2020/07/Binch1-scaled.jpg"
                alt="First slide"
                height="500px"
              />
              <Carousel.Caption>
                <h2>PUSH Day</h2>
                <h3>Click below for a full PUSH day plan!</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i2.wp.com/www.bornfitness.com/wp-content/uploads/2018/05/pull-up-lead-image2-born-fitness.jpg?fit=1920%2C1080&ssl=1"
                alt="Third slide"
                height="500px"
                width="200px"
                margin="auto"

              />

              <Carousel.Caption>
                <h2>PULL Day</h2>
                <h3>Click below for a full PUSH day plan!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://askmuscle.com/wp-content/uploads/2019/07/handsome-muscular-man-exercise-gym-day-dumbbell-leg-workout-ss-Featured.jpg"
                alt="Third slide"
                height="500px"
              />

              <Carousel.Caption>
                <h2>LEG Day</h2>
                <h3>Click below for a full LEG day plan!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

      {/* Beginning of buttons at end of page */}
          <ListGroup style={{ padding: '30px' }}>
            <ListGroup.Item href="/push" action variant="warning" 
            style={{ padding: '30px' }}>Push</ListGroup.Item>
            <ListGroup.Item href="/pull" action variant="warning"
             style={{ padding: '30px' }}>Pull </ListGroup.Item>
            <ListGroup.Item href="/legs" action variant="warning" 
            style={{ padding: '30px' }}>Legs</ListGroup.Item>
            </ListGroup>
        </div>
      </Container>
    );
  }
}