import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/CourseSlice";

export const CourseList = () => {
  const dispatch = useDispatch();
    
  const {courses} = useSelector(({form,courses:{data,searchTerm}}) => {
    // bu amk eger parantezlersen çalışmıyor
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    //console.log(filteredCourses);

    return {
      courses: filteredCourses,
    };
    
    //return state.courses.data;
  });

  const renderedCourses = courses.map((course, index) => {
    return (
      <div key={index} className="card">
        <div className="card-content">
          <p className="title">
            {course.name}
          </p>
          <p className="subtitle">{course.description}<br/><small>{course.cost}</small></p>
        </div>
        <footer className="card-footer">
          <button onClick={() => {
            dispatch(removeCourse(course.id));
          }} className="card-footer-item">
            <span>
              Delete
            </span>
          </button>
        </footer>
      </div>
    );
  })

  return (
    <>
      {renderedCourses}
    </>
  );
};
