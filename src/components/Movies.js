import MoviesItem from "./MovieItem";

// movies component that maps through myMovie prop and renders MoviesItem for each movie
const Movies = (props)=>{
    return props.myMovie.map(
        (movie)=>{
            return <MoviesItem myMovie={movie}></MoviesItem>
        }
        
    )
}

export default Movies;
