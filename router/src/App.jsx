import './App.css'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
// import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Mission from './components/Mission'
import WrongPath from './components/WrongPath'
import History from './components/History'
import Company from './components/Company'
import Team from './components/Team'
import Members from './components/Members'
import MemberDetails from './components/MemberDetails'

const LazyAboutUs = React.lazy(() => import('./components/AboutUs'))

function App() {

  return (
    <div>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<AboutUs />} /> */}
        {/* Lazy loading */}
        <Route path='/about' element={
          <React.Suspense>
            <LazyAboutUs />
          </React.Suspense>
        } />
        
        <Route path='/mission' element={<Mission />} />
        {/*iç içe linkler*/}
        <Route path='/history' element={<History />} >
        {/* path için /team hata verir team olmalı */}
          <Route path='company' element={<Company/>} />
          <Route path='team' element={<Team />} />
        </Route>
        
        <Route path='/members' element={<Members />} ></Route>
        <Route path='/members/:memberId' element={<MemberDetails />} ></Route>
        <Route path='*' element={<WrongPath />} />
      </Routes>
    </div>
  )
}

export default App
