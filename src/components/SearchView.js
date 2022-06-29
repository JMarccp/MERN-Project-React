
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5><br />
                <p className="card-subtitle">{movie.title} {movie.release_date}</p><br />
                <p className="card-text">{movie.overview}</p>
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <p className="card-rating">Rating: {movie.popularity}</p>
            </div>
        </div>
        </div>
    )
}


const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>

            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            } 
        </>
    )
}


export default SearchView;