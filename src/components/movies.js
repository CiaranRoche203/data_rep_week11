import React from 'react';
import { MovieItem } from './movieItem';
//movie class of the app
export class Movies extends React.Component{
//arrow function to obtain the movie data from movies
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie ={movie}></MovieItem>
        })
    }
}
