import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CardColumns } from 'react-bootstrap';

export class ExerciseItem extends React.Component {

  constructor() {
    super();
    this.DeleteExercise = this.DeleteExercise.bind(this);
  }

  //removes selected data from database
  DeleteExercise(e) {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/exercises/' + this.props.exercise._id)
      .then(() => {
        this.props.ReloadData();
      })
      .catch((err) => {
        console.log(err);
      });
  }



//Beginning of card 
  render() {
    return (
      <body style={{ backgroundColor: "slategrey" }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


          <Card border="warning" style={{
            width: '30rem',
            position: 'center',
            padding: "30px",
            margin: '3rem',
            alignItems: 'center',

          }}

          >
            <Card.Img variant="top" src={this.props.exercise.Poster} />
            <Card.Body>
              <h1>{this.props.exercise.Title}</h1>
              <Card.Text>
                This Exercise is great for targeting this muscle group. Go to our Home Page for Full Workout Plans!
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <h4>{"Muscle Group: " + this.props.exercise.Muscle}</h4>
            </ListGroup>
            <Card.Body>
              <Button style={{ margin: '1rem' }} variant="warning" onClick={this.DeleteExercise}>Delete</Button>
              <Link to={'/edit/' + this.props.exercise._id}
                className="btn btn-dark">Edit</Link>
            </Card.Body>
          </Card>

        </div>

      </body>

    );
  }
}
