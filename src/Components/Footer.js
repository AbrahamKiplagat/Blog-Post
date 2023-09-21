import React from 'react';
import  "bootstrap"
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5>About Ibrah Blog App</h5>
            <p>
              Ibrah Blog App is a platform for sharing and discovering blog posts. Join our community
              to explore interesting stories and share your own experiences.
            </p>
          </div>
          <div className="col-lg-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="/">Home</a>
              </li>
              <li>
                <a className="text-light" href="/about">About</a>
              </li>
              <li>
                <a className="text-light" href="/create">Create Post</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;