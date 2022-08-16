import { postTodoListItem } from '../../API/poster';
import { refreshPage } from '../../Constants/refreshPage';
import useForm from '../../Hooks/useForm';
import {
  addTaskStyle,
  button,
  input,
  mainContainer,
  secondaryContainer,
} from './styled';

export const AddItem = () => {
  const [form, handleInputChange, clear] = useForm({ description: '' });

  const onChangeDescription = (e: any) => {
    e.preventDefault();
    postTodoListItem(form);
    clear();
    refreshPage();
  };

  return (
    <div style={mainContainer}>
      <h3 style={addTaskStyle}>Adicionar nova tarefa</h3>
      <div style={secondaryContainer}>
        <form onSubmit={onChangeDescription}>
          <input
            style={input}
            id='description'
            type='text'
            name='description'
            value={form.description}
            onChange={handleInputChange}
            required
          />
          <button style={button}>Adicionar</button>
        </form>
      </div>
    </div>
  );
};
