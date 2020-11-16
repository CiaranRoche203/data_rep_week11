import React from 'react';
import { Movies } from './movies';
import axios from 'axios';
//class that represents the read page
export class Read extends React.Component {
    //state object which takes information similar to json data format.
    //based on the previou lab, now state has been set to an empty string
    state = {
        movies: []
    };
    //get the data from the api
    //uses a catch try error 
    componentDidMount() {
        //using axios, use a get method to retrieve the json data from the server. also add the new movie to the server
        axios.get('http://localhost:4000/api/movies')
        //response to the actions of the user
            .then((response) => {
                this.setState({ movies: response.data })
            }
            )
            //error should this fail
            .catch(
                (error) => { console.log(error) }
            );
    }

    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}