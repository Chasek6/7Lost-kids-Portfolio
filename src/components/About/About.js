import React from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { IframeHTMLAttributes } from "react";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Toast from "react-bootstrap/Toast";
// import Button from "react-bootstrap/Button";
// import Carousel from "react-bootstrap/Carousel";
// import Alert from "react-bootstrap/Alert";


function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Get to know me</Accordion.Header>
        <Accordion.Body>
          Just to give a brief history of my background, I graduated from West
          Chester university with a Bachelors in communications. My passions
          include but not limited to "Creative Arts, Technology, Environmental
          Change and Social Activism". I strive to make an active change in the
          world hopefully being able to merge the ARTS, TECHNOLOGY, SOCIAL
          ACTIVISM with ENVIRONMENTAL CHANGE into a innovative solution to fix
          the disperse around the world.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body >
          Bootstrap, HTML, CSS,
          MongoDB, JQuery, MySQL, Git, NoSQL, Javascript, Premiere Pro, React,<p> </p>
          Adobe Photoshop, After Effects, Adobe
          Lightroom, Adobe Premiere Pro.

          Node, Figma, Canvas, Slack.
        </Accordion.Body>
      </Accordion.Item>
      {/* {/* <iframe src="https://drive.google.com/file/d/1cdaUHYWsWlh4mUeQHWOUzP7iAM4CHbVr/preview" width="640" height="480"></iframe> */}
      <Accordion.Item eventKey="2">
        <Accordion.Header>Resume</Accordion.Header>
        <Accordion.Body>
        <frameset>
            <frame src="https://drive.google.com/file/d/1cdaUHYWsWlh4mUeQHWOUzP7iAM4CHbVr/preview" width="640" height="480"></frame>
          </frameset>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  )
}
export default BasicExample;

// function BasicExample() {
//         return (
//           <Toast>
//             <Toast.Header>
//               <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
//               <strong className="me-auto">Bootstrap</strong>
//               <small>11 mins ago</small>
//             </Toast.Header>
//             <Toast.Body>My Skills set includes but isn't limit to  Bootstrap, HTML, CSS, MongoDB, JQuery,
//                 MySQL, NoSQL,Javascript, Premiere Pro. React, Node, Figma, Canvas, Slack. </Toast.Body>

//           </Toast>
//         );
// }

//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <h1>Chase Stratton</h1>
//                     <hr></hr>
//                     <p>
//                         Hi, my name Chase Stratton. I'm a newly taught full stack developer with
//                         an focus area in MERN. Outside of being a Developer I am a Photographer
//                         and Creative.
//                     </p>
//                     <p1>
//                         Just to give a brief history of my background, I graduated from West
//                         Chester university with a Bachelors in communications. My passions
//                         include but not limited to "Creative Arts, Technology, Environmental
//                         Change and Social Activism". I strive to make an active change in the
//                         world hopefully being able to merge the ARTS, TECHNOLOGY, SOCIAL
//                         ACTIVISM with ENVIRONMENTAL CHANGE into a innovative solution to fix the
//                         disperse around the world.
//                     </p1>
//                 </Col>
//                 <Col>
//                     <BasicExample />
//                 </Col>
//             </Row>
//         </Container>
//     )

// export default function Spotify() {
//     return (
//         <iframe src="https://open.spotify.com/embed/playlist/5nvSJckENBqAPlZsMagSJa?utm_source=generator&theme=0" frameBorder="0" title="Spotify" className="h-full w-full bg-ub-cool-grey"></iframe>
//     )
// }
// function ContainerFluidExample() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col>1 of 1</Col>
//         </Row>
//       </Container>

// export const displaySpotify = () => {
//     <Spotify> </Spotify>
