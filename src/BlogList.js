import React from "react";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="blog-list-title">{title}</h2>
      {blogs.map((data) => (
        <div className="blog-preview" key={data.id}>
          <h2>{data.title}</h2>
          <p>Done by: {data.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
