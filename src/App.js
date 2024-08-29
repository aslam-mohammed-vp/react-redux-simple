import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoListSelector } from './store/features/todo/todoSelector';
import { addTodo } from './store/features/todo/todoSlice';



function App() {
  const dispatch = useDispatch();
  const todos = useSelector(todoListSelector);
  return (
    <div className="App">
      <header className="App-header">
        TODO
        <div><button onClick={() => {
          dispatch(addTodo({ id: Math.random(), text: 'todo' + Math.random() }))
        }} >Add Todo</button></div>
        <div>
          {todos.map(item => (<div id={item.id}>{item.text}</div>))}
        </div>
      </header>

    </div >
  );
}

export default App;
