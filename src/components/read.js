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
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })
            }

            )
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