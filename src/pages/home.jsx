import axios from "axios";
import { useState } from "react";

const Home = (props) => {
    const [data, setData] = useState([]);
    axios
        .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
        .then((response) => {
            setData(response.data);
        });
    return (
        <>
            <div class="gallery">
                {data.map((val) => (
                    <>
                        <img
                            src={val["urls"]["thumb"]}
                            alt={val["alt_description"]}
                            title={val["description"]}
                        />
                    </>
                ))}
            </div>
        </>
    );
};
export default Home;
