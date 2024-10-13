import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MoviesItem(props){

    // useEffect hook to log the movie details when the myMovie prop changes
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
    }, [props.mymovie]); // Only run this effect when the mymovie prop changes

    return (
        <div>
        <Card>
           {/* card header displays the movie title */}
          <Card.Header>{props.myMovie.Title}</Card.Header>
          <Card.Body>
            {/* blockquote contains the movie poster and year */}
            <blockquote className="blockquote mb-0">
              <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
              {/* movie release year */}
              <footer>{props.myMovie.Year}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }

  export default MoviesItem;
