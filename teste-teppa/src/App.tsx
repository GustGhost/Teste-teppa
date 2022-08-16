import { Header } from './Constants/Header/header';
import { AddItem } from './Page/Add/addItem';
import { ToDoList } from './Page/TodoList/todoList';

function App() {
  return (
    <div>
      <Header />
      <ToDoList />
      <AddItem />
    </div>
  );
}

export default App;
