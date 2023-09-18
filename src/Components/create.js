import React, { useState } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/blogs", data)
      .then((res) => {
        alert("new blog added");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h5 className="text-danger mb-3">Add new blog:</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="enter the title"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            onChange={handleChange}
            placeholder="enter author"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Body:</Form.Label>
          <Form.Control
            as="textarea"
            name="body"
            rows={3}
            onChange={handleChange}
            placeholder="enter content of body"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          save blog
        </Button>
      </Form>
      <p>{data.title}</p>
      <p>{data.author}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default Create;
