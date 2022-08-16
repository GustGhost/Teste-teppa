import axios from 'axios';
import { baseURL } from '../Constants/baseURL';

export const updateTodoListItem = (id: any, body: any) => {
  axios
    .put(`${baseURL}/${id}`, body)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
};
