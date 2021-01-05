import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export class Create extends React.Component {

    constructor() {
        super(); //Calls on the component of the parent class

        //Binding my event handlers so i can call on them later in other events below
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMuscle = this.onChangeMuscle.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //declaring my array
        this.state = {
            Title: '',
            Muscle: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeMuscle(e) {
        this.setState({
            Muscle: e.target.value
        });
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault(); //Stops from calling this button mutliple times
        alert("Exercise: " + this.state.Title + " "
            + this.state.Muscle + " " +
            this.state.Poster);

        const newExercise = {
            Title: this.state.Title,
            Muscle: this.state.Muscle,
            Poster: this.state.Poster
        };

        //adds new data to the database by sending up a promise
        axios.post('http://localhost:4000/api/exercises', newExercise)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <Container>
                <div className='App'>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Add Exercise Title: </label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Title}
                                onChange={this.onChangeTitle}></input>
                        </div>
                        <div className="form-group">
                            <label>Add Muscle Group: </label>
                            <input type='text'
                                className='form-control'
                                value={this.state.Muscle}
                                onChange={this.onChangeMuscle}></input>
                        </div>
                        <div className='form-group'>
                            <label>Diagram: </label>
                            <textarea type='text'
                                className='form-control'
                                value={this.state.Poster}
                                onChange={this.onChangePoster}>
                            </textarea>
                        </div>


                        <div className="form-group">
                            <input type='submit'
                                value='Add Exercise'
                                className='btn btn-warning'></input>
                        </div>
                    </form>
                </div>
            </Container>
        );
    }
}