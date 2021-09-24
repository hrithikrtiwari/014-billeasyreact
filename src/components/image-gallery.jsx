import { useContext, useEffect } from "react";
import { GalleryContext } from "../context/gallery-context";
import ImageGallery from "react-image-gallery";

const GalleryPage = () => {
    const { initial } = useContext(GalleryContext);
    var images = localStorage.getItem("images");
    return (
        <>
            <ImageGallery image={images} startIndex={initial} />
        </>
    );
};
export default GalleryPage;
