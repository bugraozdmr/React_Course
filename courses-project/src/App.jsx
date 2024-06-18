import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Courses from './Courses';
import Loading from './Loading';


function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);

  // en üste taşındı
  const DeleteCourse = (id) => {
    const AfterDeletedCourses = courses.filter((course)=>course.id !== id);

    setCourses(AfterDeletedCourses);
  }

  const fetchCourses = async () => {
    setLoading(true);
    try{
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);

      setLoading(false);
    }
    catch(error){
      setLoading(false);
    }
  }


  // bir kere çağırılır [] var -- boş olsa sürekli
  useEffect(() => {
    fetchCourses();
  },[]);

  return (
    <div>
      {loading ? 
      (<Loading></Loading>)
      :
      (
        <>
        {
          courses.length === 0 ?
          <div className='refresh'>
            <h2>Kursların hepsi gitmiş</h2>
            <button onClick={() => {fetchCourses()}} className='cardDeleteBtn'>Yenile</button>
          </div>
          :
          <Courses courses={courses} removeCourse={DeleteCourse}></Courses>
        }
        </>
      )
      }
    </div>
  )
}

export default App
