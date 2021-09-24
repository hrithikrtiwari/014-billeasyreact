import React, { useState, createContext } from "react";

export const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
    const [galleryIndex, setGalleryIndex] = useState(1);
    return (
        <>
            <GalleryContext.Provider
                value={{ galleryIndex, setGalleryIndex }}
            >
                {children}
            </GalleryContext.Provider>
        </>
    );
};
export default GalleryProvider;
