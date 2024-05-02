/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Carousel({ movies }) {
    const navigate = useNavigate();
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <div className="h-full overflow-hidden">
            <Slider {...settings}>
                {movies.map((movie) => {
                    return (
                        <div key={movie.imdbId} className="flex flex-row w-full items-center">
                            <div className="flex-1 flex justify-center">
                                <img src={movie.poster} alt={`Poster for ${movie.title}`} className="max-h-full max-w-full" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center text-white">
                                <h3 className="text-center text-2xl font-serif">{movie.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </Slider >
            <div className="flex justify-center py-2">
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate(`/Reviews`)
                    }}
                    style={{
                        marginRight: "5em"
                    }}
                >
                    Movie Review
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate(`/Trailer/${movies[0].trailerLink.substring(movies[0].trailerLink.length - 11)}`)
                    }}
                >
                    Movie Trailer
                </Button>
            </div>
        </div >
    );
}
