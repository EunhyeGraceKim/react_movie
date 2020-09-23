import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster,genres }){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className ="movies_movie">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genres,index)=> 
                <li key={index} className="gernes_genre">{genres}</li>)}</ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;