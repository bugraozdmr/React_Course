import './App.css'
import Auth from './Auth2';
import authContext from './context/auth-context'
import {useState} from 'react'

function App() {
  const [status,setStatus] = useState(false);
  const loginAuth = () => {
    console.log("metod tetiklendi");
    setStatus(true)
  }

  return (
    <>
    {/* yukarda ne tanımlandıysa altada düşer */}
      <authContext.Provider value={{status:status,login:loginAuth}}>
        <Auth />
      </authContext.Provider>
    </>
  )
}

export default App
