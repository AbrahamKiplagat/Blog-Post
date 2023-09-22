import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                        <h1 className="display-4">Welcome to Our Blog App!</h1>
                        <p className="lead">We are excited to have you here.</p>
                        
                        {/* Login and Register Buttons */}
                        <div className="m-4">
                            <Link to="/login" className="btn btn-primary m-3">Login</Link>
                            <Link to="/register" className="btn btn-secondary">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;