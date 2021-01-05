import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Pull extends React.Component {


  render() {
    return (
      <Container>
         
        <div className="table">
          <h1>PULL Day Workout</h1>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>             </th>
                <th>Exercise</th>

                <th>Sets * Reps</th>
                <th>Help</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bicep Curl</td>
                <td>4 * 8</td>
                <td><Link to={'/read'}  //Returns to exercise page where you can search through the diagrams if you need help
                  className="btn btn-warning">Click Here</Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Single Arm Dumbell Row</td>
                <td>3 * 10</td>
                <td><Link to={'/read'}
                  className="btn btn-warning">Click Here</Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bent-Over Row</td>
                <td>4 * 10</td>
                <td><Link to={'/read'}
                  className="btn btn-warning">Click Here</Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Hammer Curl</td>
                <td>3 * 10</td>
                <td><Link to={'/read'}
                  className="btn btn-warning">Click Here</Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Deadlift</td>
                <td>4 * 8</td>
                <td><Link to={'/read'}
                  className="btn btn-warning">Click Here</Link></td>
              </tr>

            </tbody>
          </Table>

        </div>
      </Container>
    );
  }
}


