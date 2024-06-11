import { Course } from './Course'
import './App.css'
import { useState } from 'react'

function getRandomCourse() {
  {/* rastgele döndürür */}
  const courseArray = ['Angular','Bootstrap','CSharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {
  {/* boş dizi state verildi */}
  const [course,setCourse] = useState([])
  
  const handleClick = () => {
    {/* ekleme yapıyor var olana -...course- */}
    setCourse([...course ,getRandomCourse()])
  }

  {/* direkt atadı başka fonksiyona */}
  const courseList = course.map((course,index) => {
    {/* farklı key değerleri yollanmalı yoksa patlıyor */}
    return <Course key={index} courseName={course} />
  })
    

  return (
    <>
      <div class="container is-max-desktop">
        <div class="notification is-primary has-text-centered">    
          <button className="button is-info is-dark" onClick={handleClick}>
            Tıkla
          </button>
        </div>
      </div>


      <div className="columns is-multiline">{courseList}</div>
    </>
  );
}

export default App
