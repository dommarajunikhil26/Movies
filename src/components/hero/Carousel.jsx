/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import { Button } from "@mui/material";


export default function Carousel({ movies }) {
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
                        </div >
                    )
                })}
            </Slider >
            <div className="flex justify-center py-2">
                <Button
                    variant="contained"
                    onClick={() => {
                        alert("Button1 clicked")
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
                        alert("Button2 clicked")
                    }}
                >
                    Movie Trailer
                </Button>
            </div>
        </div >
    );
}
