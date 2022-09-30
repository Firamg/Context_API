import { useContext } from "react";

import Context from "../my_context";


export default function Favoritos() {

  const { images, setImages } = useContext(Context);

  const deleteFav = (id) => {
    const imageIndex = images.findIndex((f) => (f.id == id));
    images.splice(imageIndex,1);
    setImages([...images])


  }

  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {images
        .filter((item)=>item.fav)
        .map((item,i)=>(
          <img 
          src={item.src} 
          alt=''
          onClick={()=>deleteFav(item.id)}
          key={i}
          />


        ))}
       
      </div>
    </div>
  );
}
