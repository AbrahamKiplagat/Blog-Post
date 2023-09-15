import React, { useState } from "react";
import "./Create.css"

const Create = ({ addBlog }) => {
  const [formData, setFormData] = useState({
    inputTitle: "",
    inputAuthor: "", // Change to inputAuthor for consistency
    name: "",
    inputBody: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new blog object with the form data
    const newBlog = {
      title: formData.inputTitle,
      body: formData.inputBody,
      author: formData.inputAuthor, // Change to author for consistency
      id: Date.now(), // Generate a unique ID (you can use a better method)
    };
    // Call the addBlog function passed from Home component to add the new blog
    addBlog(newBlog);
    // Reset the form fields
    setFormData({
      inputTitle: "",
      inputAuthor: "",
      name: "",
      inputBody: "",
    });
  };

  return (
    <form id="myForm" onSubmit={handleSubmit}>
      <h1>Input Form</h1>
      <label htmlFor="inputTitle">Title</label>
      <input
        type="text"
        id="inputTitle"
        name="inputTitle"
        placeholder="Enter the title"
        value={formData.inputTitle}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="inputAuthor">Author</label>
      <input
        type="text"
        id="inputAuthor"
        name="inputAuthor"
        placeholder="Enter the name of the Author"
        value={formData.inputAuthor}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="name">Your Name</label>
      <input
        type="name"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="inputBody">Body</label>
      <input
        type="text"
        id="inputBody"
        name="inputBody"
        placeholder="Enter the Body"
        value={formData.inputBody}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;