// import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1 className="blog-list-title">{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link
            to={`/BlogDetails/${blog.id}`}
            style={{ textDecoration: "none" }}
          >
            <h2>{blog.title}</h2>
            <p>Done by: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
