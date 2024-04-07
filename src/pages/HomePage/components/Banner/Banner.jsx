import React from "react";

import { Alert } from "react-bootstrap";
import './Banner.style.scss';

import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { getImageUrl } from "../../../../hooks/getImageUrl";

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log(data);
    if (isLoading) {
        return (
            <div className="Banner">
                <h2>Loading...</h2>
            </div>
        );
    } else if (isError) {
        return (
            <div className="Banner">
                <Alert variant="danger">{error.message}</Alert>
            </div>
        );
    } else {
        return (
            <div className="Banner">
                <div
                    style={{
                        backgroundImage: `url("${getImageUrl('original', data?.results[0].backdrop_path)}")`
                    }}
                    className="bn_in"
                >
                    <div className="bn_info">
                        <h2>{data?.results[0].title || data?.results[0].original_title}</h2>
                        <p>{data?.results[0].overview}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Banner;
