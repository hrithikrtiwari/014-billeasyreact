import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";

const GalleryPage = () => {
    let { index } = useParams();

    const [images, setImages] = useState([{}]);
    useEffect(() => {
        setImages(JSON.parse(localStorage.getItem("images")));
    }, []);
    return (
        <>
            <ImageGallery items={images} startIndex={index} />
        </>
    );
};
export default GalleryPage;
