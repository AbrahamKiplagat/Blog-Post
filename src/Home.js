import BlogList from "./BlogList";

import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./Components/useFetch";
const Home = () => {
  const { data } = useFetch(" http://localhost:4001/blogs");

  return (
    <div className="home">
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
