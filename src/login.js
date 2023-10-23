import React, { useState } from 'react';
import './App.css';

function Login() {
  const [formData, setFormData] = useState({ field1: '', field2: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success or error messages here
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>Insert Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="field1"
          placeholder="Field 1"
          value={formData.field1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field2"
          placeholder="Field 2"
          value={formData.field2}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
