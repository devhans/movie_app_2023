import  React , { createContext } from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Movie({ id, title, year, summary, poster, genres }) {
    let location = useLocation();
    let history = useNavigate();
  //   console.log("useLocation",  location );
   //  console.log("useNavigate",  history );
   const saveStateValues = ( path) => {
    localStorage.setItem("history", path);
   };

    return ( 
        <div className="movie">
            <Link
              to='/movie-detail' 
              state={{ title, year, summary, poster, genres }}  onClick={() => saveStateValues("./Movie")}
              >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title" >{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className="movie__genre">{genre}</li>
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.prototypes = { 
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Movie;
export const UserNameContext = createContext(null);
console.log(UserNameContext);