// import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
  const { id } = useParams(); 
  const { data: blog } = useFetch(`http://localhost:4001/blogs/${id}`);

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.delete(`http://localhost:4001/blogs/${id}`)
    .then(res =>{
      alert("Blog Deleted!")
      useHistory.push("/")
      })
      .catch(err=> console.log(err.message))
  }
  return (
    <div className="details">
      {blog && (<>
        <article>
          <h3>{blog.title}</h3>
          <p>Done BY: {blog.author}</p>
          <div>{blog.body}</div>
          <Button onClick= { handleSubmit} className="mt-3" variant="danger">
            delete
          </Button>
        </article>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
