import React from 'react';
import PropTypes from "prop-types";

// 인자를 { } 로 감싸지 않으면 화면에 표시가 안됨
function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;