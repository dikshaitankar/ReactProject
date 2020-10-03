import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";

const TodoForm = (props) => {
  const [state, changeState] = useState({
    name: "",
    description: "",
    checked: false,
  });
  const changeTextHandler = (data) => {
    changeState({
      ...state,
      [data.target.name]: data.target.value,
    });
  };
  const submitTodoHandler = () => {
    props.submitHandler(state);
    changeState({
      name: "",
      description: "",
      checked: false,
    });
  };

  useEffect(() => {
    changeState({
      name: props.editedValue.name,
      description: props.editedValue.description,
    });
  }, [props.editedValue]);

  return (
    <Container>
      <h3 className="todoListHeader">Todo List</h3>
      <Form autoComplete="off">
        <FormGroup>
          <Row>
            <Col sm="2">
              <Label for="exampleEmail">Name</Label>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="name"
                value={state.name}
                onChange={changeTextHandler}
                placeholder="Name"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm="2">
              {" "}
              <Label for="examplePassword">Description</Label>
            </Col>
            <Col sm="4">
              <Input
                type="text"
                name="description"
                value={state.description}
                onChange={changeTextHandler}
                placeholder="Description"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <Button
                color="info"
                size="sm"
                type="button"
                onClick={submitTodoHandler}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default TodoForm;
