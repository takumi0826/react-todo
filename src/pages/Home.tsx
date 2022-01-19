import axios from 'axios';
import React from 'react';

const Home = () => {
  const send = async (str: string) => {
    const url = `http://localhost:8080/api/mail`;
    await axios
      .post(url, str)
      .then((res) => {
        alert(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <h1>home</h1>
      <button onClick={() => send("hello")}>mailtest</button>
    </div>
  );
};

export default Home;
