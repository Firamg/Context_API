import "./styles.css";
import { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./my_context";

export default function App() {

  const [images, setImages] = useState([]);

  const endpoint = "/fotos.json";

  const sharedState = { images, setImages }

  const getImagesItem = async () => {
    const res = await fetch(endpoint)
    let { photos } = await res.json()

      photos = photos.map((item)=>({
        id: item.id,
        src: item.src.tiny,
        alt: item.alt,
        photographer:item.photographer,
        fav: false,
  
  
      }))
  
    setImages(photos)
  };

  useEffect(() => {
    getImagesItem()

  }, [])

  return (
    <div className="App">
      


      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>



      </Context.Provider>

    </div>
  );
}
