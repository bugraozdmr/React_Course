import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


function Courses({courses,removeCourse}){
    const [index,setIndex] = useState(0);
    const {content,title,price} = courses[index];

    const prevCourse = () => {
        let newIndex = index - 1;
        if(newIndex < 0){
            setIndex(courses.length - 1);    
        }
        else{
            setIndex(newIndex);
        }
    }

    const nextCourse = () => {
        let newIndex = index + 1;
        if(newIndex > courses.length -1){
            setIndex(0);    
        }
        else{
            setIndex(newIndex);
        }
    }

    const getRandomCourse = () => {
        let randVal = Math.floor(Math.random()*courses.length);
        if(randVal === index){
            console.log("inside")
            if(index === 0){
                randVal = randVal + 1;
            }
            else if(index === courses.length - 1){
                randVal = randVal -1;
            }
            else{
                randVal = randVal - 1;
            }
            
        }

        console.log(randVal)

        setIndex(randVal)
    }

    return (
      <div className="courseMainDiv">
        <div>
          <h2>Kurslarım</h2>
        </div>
        <div>
        <button className="randomBtn" onClick={getRandomCourse}>Rastgele kurs ata</button>
        </div>
        <div className="cards">
          <button className="prevNextBtn" onClick={prevCourse}>
            <FaChevronLeft />
          </button>
          <div className="card">
            <div className="cardTitlePrice">
              <h2 className="cardTitle">{title}</h2>
              <h4 className="cardPrice">{price} TL</h4>
            </div>
            <p>{content}</p>
          </div>
          <button className="prevNextBtn" onClick={nextCourse}>
              <FaChevronRight />
            </button>
        </div>
      </div>
    );
}

export default Courses;