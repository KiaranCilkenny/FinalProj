import React from 'react';
import {ExerciseItem} from './exerciseitem';

export class Exercises extends React.Component{

    render(){
        return this.props.exercises.map( (exercise)=>{      //displays a list of similar objects from a parent component
            return <ExerciseItem exercise={exercise} ReloadData={this.props.ReloadData}></ExerciseItem>
        })
    }
}