import axios from 'axios';
import { baseURL } from '../Constants/baseURL';

export const postTodoListItem = (body: any) => {
  axios
    .post(`${baseURL}`, body)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};
