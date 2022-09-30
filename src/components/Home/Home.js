import React from "react";
import rp1 from './rp1.jpg'; 
// import scss from './index.scss'


export default function Home() {
  return (
    <div>
            <section className="container">
            <h2 className="top-title">Chase Stratton</h2>
            <hr></hr>
            <div>
            <img className="img-thumbnail" id="avatar" src={rp1} alt="Chase Stratton " ></img> 

                <p>
                Hi, my name Chase Stratton. I'm a newly taught full stack developer with
        an focus area in MERN. Outside of being a Developer I am a Photographer
        and Creative.
                </p>
                <p>
                {/* Just to give a brief history of my background, I graduated from West
        Chester university with a Bachelors in communications. My passions
        include but not limited to "Creative Arts, Technology, Environmental
        Change and Social Activism". I strive to make an active change in the
        world hopefully being able to merge the ARTS, TECHNOLOGY, SOCIAL
        ACTIVISM with ENVIRONMENTAL CHANGE into a innovative solution to fix the
        disperse around the world. */}
                </p>
            </div>
        </section>
    </div>
  );
}
