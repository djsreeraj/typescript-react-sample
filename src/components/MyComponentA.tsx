import React, { Component } from 'react';
import myModel from '../models/myModelA';

export default class MyComponentA extends Component<myModel, myModel> {

    constructor(props:any){
        super(props);

        this.state = {
            age: props.age,
            name:props.name
        }
    }


    render() {
        return (
            <h1>
                Hello, I am {this.state.age} years old
            </h1>
        )
    }
}
