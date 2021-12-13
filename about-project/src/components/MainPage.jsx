import React, { useState } from "react";
import About from "./About";
import Images from "./Images";
import FormComponent from "./Form";
import { Row, Col } from "react-bootstrap";
import Comments from "./Comments";
import "../App.css";

const MainPage = () => {
  const [comments, setComments] = useState([]);

  const setComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div style={{ backgroundImage: `url("/background.jpg")` }}>
      <div>
        <h1 className="pt-5 mb-5">STEFAN VITAS</h1>
        <About />
        <Images />
      </div>
      <div className="pb-3">
        <Row className="m-4 shadow p-3 mb-5 bg-white rounded">
          <h2>Tell something about me</h2>
          <Col>
            <FormComponent setComment={setComment} />
          </Col>
          <Col>
            <Comments comments={comments} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainPage;
