import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const GalleryPage = () => {
    let { index } = useParams();

    const [images, setImages] = useState([{}]);
    useEffect(() => {
        setImages(JSON.parse(localStorage.getItem("images")));
    }, []);
    return (
        <>
            <CarouselProvider
                totalSlides={images.length}
                naturalSlideWidth={10}
                naturalSlideHeight={10}
                currentSlide={index}
            >
                <Slider>
                    {images.map((url, index) => (
                        <>
                            <Slide index={index}>
                                ==================
                                <br />
                                Slide Number : {index}/{images.length}
                                <br />
                                ==================
                                <br />
                                <ButtonBack>Back</ButtonBack>
                                <img
                                    src={url["original"]}
                                    alt={"loading"}
                                    className="carousel-image"
                                />
                                <ButtonNext>Next</ButtonNext>
                            </Slide>
                        </>
                    ))}
                </Slider>
            </CarouselProvider>
            {/* <ImageGallery items={images} startIndex={index} /> */}
        </>
    );
};
export default GalleryPage;
