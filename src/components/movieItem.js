import React from 'react';
import Card from 'react-bootstrap/Card';
//movie item class of the app
export class MovieItem extends React.Component {
    //returns the movie title, year and poster, in a card format that is imported from bootstrap
    //information is accessed from the object in the read class
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
