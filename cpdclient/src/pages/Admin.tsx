import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    bname: '',
    quantityrating: '',
    qualityrating: '',
    pricerating: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    axios.post('http://localhost:80/api/businesses', formData)
      .then(response => {
        console.log(response.data);
        alert('Data inserted successfully');
        // Reset form
        setFormData({
          bname: '',
          quantityrating: '',
          qualityrating: '',
          pricerating: '',
          address: ''
        });
      })
      .catch(error => {
        console.error('There was an error inserting the data!', error);
      });
  };

  return (
    <div className="container">
      <h1>Insert Business Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="bname" value={formData.bname} onChange={handleChange} required />
        </div>
        <div>
          <label>Quantity Rating:</label>
          <input type="number" name="quantityrating" value={formData.quantityrating} onChange={handleChange} required />
        </div>
        <div>
          <label>Quality Rating:</label>
          <input type="number" name="qualityrating" value={formData.qualityrating} onChange={handleChange} required />
        </div>
        <div>
          <label>Price Rating:</label>
          <input type="number" name="pricerating" value={formData.pricerating} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataForm;