import React from 'react'

function MovieDisplay(props) {
    const loaded = () => {
        return (
            <>
            <div>
      {/* <h1>Movie Display</h1> */}
      {/* what to show from api info */}
      <h1>{props.movie.Title}</h1>
      <h1>{props.movie.Year}</h1>
      <h1>Rated: {props.movie.Rated}</h1>
      <hr/>
      {/* poster */}
      <img src={props.movie.Poster} alt="" />
      <h3>Starring: {props.movie.Actors}</h3>
      <hr/>
      {/* plot */}
      <h3>{props.movie.Plot}</h3>
      <h1>{props.movie.Awards}</h1>

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
