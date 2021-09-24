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
            {
                data.map((arr) =>
                    <>
                    {arr["id"]}
                    <br/>
                    </>
                )
            }
        </>
    );
};
export default Home;
