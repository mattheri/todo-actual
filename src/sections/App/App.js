import Form from '../../blocks/Form/Form';
import TodosContextProvider from '../../blocks/TodosContext/TodosContext';
import Input from '../../components/Input/Input';
import CreateTodos from '../CreateTodos/CreateTodos';
import Header from '../Header/Header';

function App() {
  const initialValues = {
    title: '',
    description: '',
  }

  const onSubmit = (values) => {
    
  }

  return (
    <TodosContextProvider>
      <Header />
      <CreateTodos />
    </TodosContextProvider>
  );
}

export default App;
