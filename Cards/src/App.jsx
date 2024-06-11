import { useState } from "react";
import "./App.css";
import { Course } from "./Course";

import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <>
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">Courses</p>
          <p className="subtitle">Latest Ones</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequuntur."
              />
            </div>

            <div className="column">
              <Course
                image={Bootstrap}
                title="MVC"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequuntur."
              />
            </div>

            <div className="column">
              <Course
                image={Csharp}
                title="Python"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, consequuntur."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
