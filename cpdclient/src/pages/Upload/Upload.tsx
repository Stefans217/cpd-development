import React, { useState, useEffect } from "react";

const Upload: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, username, password, nickname);

    try {
      const response = await fetch("http://localhost:80/api/dataUpload", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email, nickname }),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
      } else {
        console.error("Error submitting data");
      }

    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Data Upload Page</h1>
      <p>
        This page contains methods to upload data to the node js filesystem and
        mysql database.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)} required
          placeholder="nickname"
        /><br/>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} required
          placeholder="username"
        /><br/>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
          placeholder="password"
        /><br/>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
          placeholder="email"
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
