import React, { useState, useEffect } from 'react';
import '../styles/Data.css';

const Data: React.FC = () => {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/businesses")
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/api/businesses');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching data', error);
  //   }
  // };



  return (
    <div className="container">
      <h1>Welcome to the Data page</h1>
      <p>See below business data in JSON format:</p>
      <ul>
        {/* {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))} */}
        <li>{data}</li>
      </ul>
    </div>
  );
};

export default Data;