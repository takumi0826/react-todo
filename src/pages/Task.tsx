import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Page1 = () => {
  const getTask = async () => {
    const url = `http://localhost:8080/api/get-task`;
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    const response = await axios.get(url, { headers });
    console.log(response);
  };
  void getTask();

  return (
    <div className="">
      <h1>ページ１</h1>
      {/* <Outlet /> */}
    </div>
  );
};

export default Page1;
