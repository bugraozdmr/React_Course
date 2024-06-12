import searchImages from "./Api"
import './App.css'
import SearchHeader from "./SearchHeader"

function App() {
  


  const handleSubmit = (term) => {
    searchImages(term)
  }



  return (
    <>
      <SearchHeader search={handleSubmit}></SearchHeader>
    </>
  )
}

export default App
