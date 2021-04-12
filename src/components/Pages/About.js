import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { IoGrid } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <Container>
        <Row
          style={{
            margin: "50px",
          }}
        >
          <Col>
            <h1></h1>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              margin: "50px",
            }}
          >
            <h2>Team 31</h2>
            <ul>Befiker Beksisa</ul>
            <ul>Ivan Samuel</ul>
            <ul>Steven Hernandez</ul>
            <ul>WaKit Lam</ul>
          </Col>
          <Col
            style={{
              margin: "50px",
            }}
          >
            <h2>Instructors & Advisor</h2>
            <ul>Dr. David Feil-Seifer</ul>
            <ul>Dr. Devrin Lee</ul>
            <ul>Dr. Lei Yang</ul>
          </Col>
          <Col
            style={{
              margin: "50px",
            }}
          >
            <h2>Project Desciption</h2>
            <p>
              Avoiding areas that may have a higher possibility of a crime is
              one of the many concerns a person has when going to a new place.
              While word of mouth of what areas to avoid or actions not to do
              can give one a peace of mind, it is really not the same when
              comparing it to having actual data that can help the person decide
              if it is safe to go or not. Hence, the goal is a web application
              that will give the users the chance to look at a certain city to
              check the type of crimes that happen within. The website will show
              the type of crimes, when it happened and where it happened on a
              map. Along with various other filters to help the user get a
              better picture of the crime. This is intended to help those who
              are planning to visit a new city they have never been before,
              people looking at an area’s safety for a potential home, or even
              help the local emergency service. The website will use information
              from the local or metropolitan police station to get the most
              recent data and keep users informed with the latest reports. The
              project is currently being worked on and is planned to be up and
              running around April of 2021.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
