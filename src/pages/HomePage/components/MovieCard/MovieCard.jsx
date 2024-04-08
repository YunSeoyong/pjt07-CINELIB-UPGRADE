import React from "react";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

import { getImageUrl } from "../../../../hooks/getImageUrl";

const MovieCard = ({ movie }) => {
    return (
        <Moviecard
            style={{
                backgroundImage: `url("${getImageUrl(
                    "original",
                    movie.poster_path
                )}")`,
            }}
        >
            <div className="overlay">
                <h3>{movie.title || movie.original_title}</h3>
                <div className="ov_genre">
                    {movie.genre_ids.map((id, idx) => 
                        <Badge bg="danger" key={idx}>{id}</Badge>
                    )}
                </div>
                <div className="ov_info">
                    <p>{movie.vote_average}</p>
                    <p>{movie.popularity}</p>
                    <p>{movie.adult ? '18' : 'All'}</p>
                </div>
            </div>
        </Moviecard>
    );
};

export default MovieCard;

const Moviecard = styled.div`
    box-sizing: border-box;
    min-width: 200px;
    width: 90%;
    max-width: 400px;
    min-height: 330px;
    height: 72vw;
    max-height: 480px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1) translateZ(20px);
        z-index: 2;
    }

    .overlay {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 20px 30px;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: all 0.3s;
        color: #fff;
        font-weight: 600;
        overflow-wrap: break-word;

        h3 {
            font-size: var(--font-content-subtitle);
            line-height: 1.3;
            margin-bottom: 8px;
        }

        .ov_genre {
            margin-bottom: 10px;
            span {
                margin: 2px;
            }
        }

        .ov_info {
            line-height: 1.6;
        }
    }

    &:hover .overlay {
        opacity: 1;
    }
`;