import React, { useState, useEffect } from 'react';
import '../styles/Data.css';


interface BusinessData{
  id: number;
  name: string;
  age: number;
}


const Data: React.FC = () => {

  const [data, setData] = useState<BusinessData[]>([]);

  useEffect(() => {
    fetch("http://localhost:80/api/businesses", {
      headers: {
      Accept: "application/json"
    }})
    .then(res => {
      return res.json();
    })
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data', error));
  }, []);




  return (
    <div className="container">
      <h1>Welcome to the Data page</h1>
      <p>See below business data in JSON format:</p>
       
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Data;