import { useEffect, useState } from 'react';
import { deleteTodoListItem } from '../../API/deleter';
import { getTodoList } from '../../API/getter';
import { updateTodoListItem } from '../../API/updater';
import { refreshPage } from '../../Constants/refreshPage';
import useForm from '../../Hooks/useForm';
import {
  button,
  input,
  mainContainer,
  secondaryContainer,
  taskStyle,
} from './styled';

export const ToDoList = () => {
  const [list, setList] = useState([]);
  const [form, clear] = useForm({ description: '' });
  const [newForm, setNewForm] = useState(form);

  useEffect(() => {
    getTodoList(setList);
  }, [setList]);

  const handleInputChangeNewForm = (e: any) => {
    const { name, value } = e.target;
    setNewForm({ ...newForm, [name]: value });
  };

  const body = {
    description: newForm.description,
  };

  const renderList =
    list &&
    list.map((item: any) => {
      const onChangeAlterDescription = (e: any) => {
        updateTodoListItem(item.id, body);
        clear();
        refreshPage();
      };
      return (
        <div style={mainContainer} key={item.id}>
          <div style={taskStyle}>
            <h4>{item.description.toUpperCase()}</h4>
          </div>
          <div style={secondaryContainer}>
            <form onSubmit={onChangeAlterDescription}>
              <input
                style={input}
                id={item.id}
                type='text'
                name='alter'
                value={newForm.description}
                onChange={handleInputChangeNewForm}
                required
              />
              <button style={button}>Alterar Tarefa</button>
            </form>
            <button
              style={button}
              onClick={() => {
                deleteTodoListItem(item.id);
              }}
            >
              Remover Tarefa
            </button>
          </div>
        </div>
      );
    });

  return <div>{renderList}</div>;
};
