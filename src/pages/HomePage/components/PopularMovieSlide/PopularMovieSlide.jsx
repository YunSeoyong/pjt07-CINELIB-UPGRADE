import React from "react";

import styled from "styled-components";
import { Alert } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieCard from "../MovieCard/MovieCard";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
    },
};

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        return (
            <div>
                <h2>Loading...</h2>;
            </div>
        );
    } else if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    } else {
        return (
            <PopularMovieslide>
                <h2>Popular Movies</h2>
                <Carousel
                    infinite={true}
                    centerMode={true}
                    itemClass="carousel-container"
                    responsive={responsive}
                >
                    {
                        data?.results.map((movie, index) => 
                            <MovieCard movie={movie} key={index} />
                        )
                    }
                </Carousel>
            </PopularMovieslide>
        );
    }
};

export default PopularMovieSlide;

const PopularMovieslide = styled.div`
    padding: 0 20px;
    z-index: 300;
    
    h2 {
        font-size: var(--font-content-title);
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .react-multi-carousel-list {
        overflow: visible;
    }
`;