import React from 'react'
import {instructor} from '../components/propsType'



function Instructor(props:instructor) {
  return (
    <div>Instructor name surname : {props.instructor.firstName} {props.instructor.lastName}</div>
  )
}

export default Instructor