import './App.css';
import { Container } from 'react-bootstrap'
import  AddToDo  from './components/AddToDo';
import  DisplayTodos  from './components/DisplayTodos';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Container>
      <AddToDo/>
      <DisplayTodos/>
    </Container>
    </Provider>
  )
}

export default App;
