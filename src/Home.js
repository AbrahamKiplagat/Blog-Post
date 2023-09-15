import React, { useState, useEffect } from "react";
// import axios from "axios";
import BlogList from "./BlogList";
import Create from "./Components/create";
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './Components/useFetch'
const Home = () => {
  // const [blogs, setBlogs] = useState(null);
  const {data}=useFetch(' http://localhost:4001/blogs')
/***from form.... */
  // Function to add a new blog to the list
  // const addBlog = (newBlog) => {
  //   setBlogs([...(data || []), newBlog]); // Ensure blogs is an array before adding a new blog
  // };

  return (
    <div className="home">
      {data && <BlogList blogs={data} title="All Blogs" />}
      {/* <Create addBlog={addBlog} /> */}
    </div>
  );
};

export default Home;
