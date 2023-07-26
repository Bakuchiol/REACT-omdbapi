import React from 'react'

function MovieDisplay(props) {
    const loaded = () => {
        return (
            <>
            <div>
                <div id='movieWrap'>
                    <div>
                        <img src={props.movie.Poster} alt="" />
                    </div>
                    <div id='movieDetails'>
                        <h1 className='movieTitle'>{props.movie.Title}<span>{props.movie.Year}</span></h1>
                        <h3>Rated: {props.movie.Rated}, {props.movie.Genre}</h3>
                        <h3 className='plot'>{props.movie.Plot}</h3>
                        <hr/>
                        <div>
                            <h3 className='movieDirect'>Director: {props.movie.Director}<span>Writer: {props.movie.Writer}</span></h3>
                            <h3>Starring: {props.movie.Actors}</h3>
                            <hr />
                            <p>Awards:</p>
                            <h1>{props.movie.Awards}</h1>
                        </div>
                    </div>      
                </div>
            </div>
            </>
        )
    };

const loading = () => {
    return <h1>NO MOVIE TO DISPLAY</h1>
}
// if there's movie load if not no movie
return props.movie ? loaded() : loading();
//   return (
//     <div>
//       {/* <h1>Movie Display</h1> */}
//       {/* what to show from api info */}
//       <h1>{props.movie.Title}</h1>
//       <h1>{props.movie.Year}</h1>
//       <h1>Rated: {props.movie.Rated}</h1>
//       <hr/>
//       {/* poster */}
//       <img src={props.movie.Poster} alt="" />
//       <h3>Starring: {props.movie.Actors}</h3>
//       <hr/>
//       {/* plot */}
//       <h3>{props.movie.Plot}</h3>
//       <h1>{props.movie.Awards}</h1>

//     </div>
//   )
}

export default MovieDisplay
