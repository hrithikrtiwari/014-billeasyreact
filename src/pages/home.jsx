import axios from "axios";
import { useState, useEffect } from "react";
import ImageComponent from "../components/image-component";

const Home = (props) => {
    const [data, setData] = useState([]);
   async function getData() {
         await axios
              .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
              .then((response) => {
                  setData(response.data);
                  const imagesList = response.data.map((val) => ({
                      original: val["urls"]["raw"],
                      thumbnail: val["urls"]["thumb"],
                  }));
                  localStorage.setItem("images", JSON.stringify(imagesList));
                  console.log(imagesList);
              });
    }
    useEffect(() => {
        getData();

    }, []);

    return (
        <>
            <div class="gallery">
                <ImageComponent data={data} />
            </div>
        </>
    );
};
export default Home;
