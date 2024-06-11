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
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={image}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
              </div>
            </div>

            <div className="content">
              {description}
            </div>
          </div>
        </div>
      </>
    );
}


/*
function Course(){
    return <div>Sea</div>;
}

export default Course;
*/