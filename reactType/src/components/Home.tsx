// rfce ' ile oluştu

import React from 'react'
import {DataComes} from '../components/propsType'



function Home(props:DataComes) {
  return (
    <div>Hi {props.name} . You have {props.course_number} courses</div>

  )
}

export default Home