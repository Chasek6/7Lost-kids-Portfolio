import React from "react";
// import { Container, Row, Col, CardGroup, CardImg, Button, Placeholder, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsCards from "./ProjectsCards";


function ProjectsCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p className="name">{props.name}</p>
                <p className="projs-icons-container">
                    <a href={props.github} target="_blank" rel="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo"> <i className="fab fa-github"></i>
                    </a>
                    <a href={props.deployed} target="_blank" rel="https://img.icons8.com/fluent/48/000000/external-link.png" alt="Deployed App"> <i className="fas fa-external-link-alt"></i>
                   <p className="topics">{props.topics}</p>
                   
                    </a>    
                </p>
            </div>
        </div>
    );
}

     
                  
export default ProjectsCards;