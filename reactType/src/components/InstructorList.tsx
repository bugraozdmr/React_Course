import React from 'react'

// Array type
type ListOfInst = {
    instructorList : {
        firstName:string,
        lastName:string
    }[];
};

function InstructorList(props:ListOfInst) {
  return (
    <div>
        {props.instructorList.map((element,index) => {
            return (
                <h3 key={index}>
                    {element.firstName} - {element.lastName}
                </h3>
            );
        })}</div>
  )
}

export default InstructorList