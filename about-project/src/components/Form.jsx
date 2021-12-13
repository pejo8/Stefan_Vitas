import React, { useState } from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

const FormComponent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(0);
  const [text, setText] = useState("");

  const onSubmit = () => {
    props.setComment({ firstName, lastName, gender, text });
    setFirstName("");
    setLastName("");
    setGender(0);
    setText("");
  };

  return (
    <div>
      <Form className="p-3" style={{ textAlign: "left" }}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className="ml-3">First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select
              className="me-sm-2 mb-3"
              id="inlineFormCustomSelect"
              value={gender}
              onChange={(event) => setGender(parseInt(event.target.value))}
            >
              <option value="0">Gender...</option>
              <option value="1">Female</option>
              <option value="2">Male</option>
              <option value="0">Other</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="About me"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={text}
              onChange={(event) => setText(event.target.value)}
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button
            variant="success"
            type="button"
            style={{ width: "35%" }}
            onClick={(event) => onSubmit()}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default FormComponent;
