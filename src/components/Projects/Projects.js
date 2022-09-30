import React from "react";
// import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import { Container, Row, Col, CardGroup, Button, Card } from "react-bootstrap";
import data from "../../portfolio.json";

const Projects = (pro) => {
  return (
    <Container>
      <Row> 
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <div>
          <CardGroup>
            {data.map((project) => (
              <Card>
                <Card.Img variant="top" src={project.image} />
                {project.title}
                <Card.Text>{project.description}</Card.Text>
                {/* adding spotify playlist and interactive game to project page for page aesthetics   */}
                <Card.Footer>
                  <small className="text-Black">{project.topics}</small>
                  <small className="text-light">{project.technologies}</small>
                  <br></br>
                  <Card key="id1">
                    <Button
                      variant="clear"
                      href={project.github}
                      target="_blank"
                      rel="https://img.icons8.com/fluent/48/000000/github.png"
                      alt="GitHub Repo"
                    >
                      {" "}
                      <i className="fab fa-github"></i>
                    </Button>
                  </Card>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </div>
        <p>
          Here are a few applications I created and a spotify playlist I
          curated.
        </p>
        <div></div>
        <object>
          <iframe
            title="myframe"
            src="https://open.spotify.com/embed/playlist/5nvSJckENBqAPlZsMagSJa?utm_source=generator"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <iframe
            title="myframe"
            src="https://giphy.com/search/coding"
            width="1000"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </object>
      </Row>
    </Container>
  );
};

export default Projects;

// Language: javascript

{
  /* <iframe title="myframe" src="https://giphy.com/search/coding" width="1000" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */
}
{
  /* <iframe title="myframe" src="https://open.spotify.com/embed/playlist/5nvSJckENBqAPlZsMagSJa?utm_source=generator" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */
}
