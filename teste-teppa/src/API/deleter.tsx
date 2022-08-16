import axios from 'axios';
import { baseURL } from '../Constants/baseURL';
import { refreshPage } from '../Constants/refreshPage';

export const deleteTodoListItem = (id: string) => {
  axios
    .delete(`${baseURL}/${id}`)
    .then((res) => {
      alert(res.data);
      refreshPage();
    })
    .catch((err) => {
      alert(err.message);
    });
};
