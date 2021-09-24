import { useState, useEffect, useContext } from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import { GalleryContext } from "../context/gallery-context";

const ImageComponent = ({ data }) => {
    const { setGalleryIndex } = useContext(GalleryContext);

    useEffect(() => {
        const imagesList = data.map((val) => ({
            original: val["urls"]["raw"],
            thumbnail: val["urls"]["thumb"],
        }));
        localStorage.setItem("images", imagesList);
    }, []);

    //  [{"original" : thumbnails, "thumbnail":  }];
    return (
        <>
            {data.map((val, index) => (
                <>
                    <Link to="/gallery">
                        <div onClick={setGalleryIndex(index)}>
                            <img
                                src={val["urls"]["thumb"]}
                                alt={val["alt_description"]}
                                title={val["description"]}
                                className="image"
                            />
                        </div>
                    </Link>
                </>
            ))}
        </>
    );
};
export default ImageComponent;
