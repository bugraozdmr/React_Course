import { useState } from "react"
import searchImages from "./Api"
import ImageList from "./components/ImageList"
import './App.css'
import SearchHeader from "./SearchHeader"



function App() {
  
  const [images,setImages] = useState([]);

  const handleSubmit = async (term) => {
    // geleni yakalar
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <>
      <SearchHeader search={handleSubmit}></SearchHeader>
      <ImageList imagesPlaceholder={images}></ImageList>
    </>
  )
}

export default App
