import React from 'react'
import { useSelector } from 'react-redux'



export const CourseValue = () => {
  const totalCost = useSelector(({form,courses:{data,searchTerm}}) => {
    // bu amk eger parantezlersen çalışmıyor
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    let cost = 0;

    for(let course of filteredCourses){
      cost += course.cost;
    }

    return cost;
  });

  return (
    <div style={{fontSize:'1.4rem',textAlign:'center'}}>
      <hr />
      Total Value : <span style={{color:'red'}}><i>{totalCost} TL</i></span>
    </div>
  )
}
