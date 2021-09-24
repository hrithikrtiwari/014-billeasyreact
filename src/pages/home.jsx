import axios from "axios";
import { useState } from "react";
import ImageComponent from "../components/image-component";


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
             <ImageComponent data={data} />
            </div>
        </>
    );
};
export default Home;
