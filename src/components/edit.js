import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();    //Calls on the component of the parent class

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

    componentDidMount(){
        console.log("load "+this.props.match.params.id);

        //retrieves data from database
        axios.get('http://localhost:4000/api/exercises/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.Title,
                Muscle:response.data.Muscle,
                Poster:response.data.Poster,
                _id:response.data._id
            })
        })
        .catch((err)=>{
            console.log(err);
        });
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
        e.preventDefault();    //Stops from calling this button mutliple times
        alert("Exercise: " + this.state.Title + " "
            + this.state.Muscle + " " +
            this.state.Poster);

            const newExercise ={
                Title:this.state.Title,
                Muscle:this.state.Muscle,
                Poster:this.state.Poster
            };
            
            //Updates data from database 
            axios.put('http://localhost:4000/api/exercises/'+this.state._id, newExercise)
            .then((xyz)=>{
                console.log(xyz);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render() {
        return (
            <container>
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
                            value='Edit Exercise'
                            className='btn btn-warning'></input>
                    </div>
                </form>
            </div>
            </container>
        );
    }
}