import axios from 'axios';
import { baseURL } from '../Constants/baseURL';

export const getTodoList = (setData: any) => {
  axios
    .get(`${baseURL}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};
