import { useContext } from "react";
import "../assets/css/galeria.css";
import Context from "../my_context";
import Heart from "./Heart";
import Card from 'react-bootstrap/Card';


export default function Home() {

  const { images, setImages } = useContext(Context);

  const setFav = (id) => {
    const imageIndex = images.findIndex((f) => (f.id == id));
    images[imageIndex].fav = !images[imageIndex].fav;
    setImages([...images])


  }


  return (
    <div className="row">

      {
        images.map((item, i) => (

          <div className="col-3 mb-4" key={i}>


            <div 
              onClick={()=>(setFav(item.id))}
              className="foto"
              style={{ backgroundImage: `url(${item.src})` }}>

              <Heart filled={item.fav}/>

              <p className="text-red" style={{ color: 'Black' }}>  {item.alt} - <span > {item.photographer}</span></p>

            </div>





          </div>
        )
        )
      }




    </div>
  );
}
