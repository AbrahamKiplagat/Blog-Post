import { Button } from "react-bootstrap"
import { Link } from "react-router-dom/cjs/react-router-dom"
import './NotFound.css';
const NotFound = () =>{
return(
  <div className="not-found text-center">
      <h1 className="display-1">404</h1>
      <h5 className="mb-4">Sorry! The page you are looking for is not found.</h5>
      <Link to="/">
        <Button variant="outline-primary">Go back to the home page</Button>
      </Link>
    </div>
)
}
export default NotFound