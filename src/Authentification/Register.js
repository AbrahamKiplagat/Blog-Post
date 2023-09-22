import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here, such as making an API request.
    console.log('Registration Form Data:', formData);
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary m-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;