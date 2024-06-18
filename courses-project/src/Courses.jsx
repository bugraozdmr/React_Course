import Course from "./Course";


function Courses({courses,removeCourse}){
    return(
        <div className="courseMainDiv">
            <div>
                <h2>Courses</h2>
            </div>
            <div className="cards">
                {
                    courses.map((course,index) => {
                        return (
                            //<Course key={index} course={course} />

                            // spread operatoru
                            <Course key={index} {...course} removeOneCourse={removeCourse} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Courses;