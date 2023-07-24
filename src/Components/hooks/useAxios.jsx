import React from 'react';
import axios from 'axios';


const useAxios = () => {
  const instance = axios.create({
    baseURL: `https://school-system-server.vercel.app`
  });

  return [instance]
};

export default useAxios;