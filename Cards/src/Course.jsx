import React from 'react'

export const Course = (props) => {
    /*
    const title = props.title;
    const description = props.description;
    */

    // modern way
    const {image,title,description} = props;

    // daha iyisi ({title,description}) => ... yap
    return (
        <>
            <img src={image} alt='resim'></img>
            <div>{title}</div>
            <div>{description}</div>
        </>
  )
}


/*
function Course(){
    return <div>Sea</div>;
}

export default Course;
*/