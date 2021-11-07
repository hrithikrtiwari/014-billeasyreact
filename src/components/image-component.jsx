import { Link } from "react-router-dom";




const ImageComponent = ({ data }) => {
    return (
        <>
            {data.map((val, index) => (
                <Link to={"/gallery" + index}>
                    <img
                        src={val["urls"]["thumb"]}
                        alt={val["alt_description"]}
                        title={val["description"]}
                        className="image"
                    />
                </Link>
            ))}
        </>
    );
};
export default ImageComponent;
