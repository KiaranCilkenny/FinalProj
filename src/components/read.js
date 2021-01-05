import React from 'react';
import { Exercises } from './exercises';
import axios from 'axios';

export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        exercises: [],
        search : ""
    };

    ReloadData(){
        axios.get('http://localhost:4000/api/exercises') //Retrieves data from database
            .then((response) => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }


    componentDidMount() {
        axios.get('http://localhost:4000/api/exercises')
            .then((response) => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    onChange = e =>{
        this.setState({ search : e.target.value });
    }

    render (){
    const { exercises, search} = this.state;
    const muscleSearch = exercises.filter( exercise =>{
        return exercise.Title.toLowerCase().indexOf( search.toLowerCase()) !== -1
    } )


        return (
            <div>
                {/* //searchbar */}
                <input style={{ margin: '2rem'}} class="Search Exercise" icon="search" onChange={this.onChange} placeholder="Search Exercise"/>  {/*Placeholder wont change? */}
                <Exercises exercises={muscleSearch} ReloadData={this.ReloadData}></Exercises>
            </div>
        );
    }
}
