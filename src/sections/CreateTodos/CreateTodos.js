import { useContext } from 'react';
import Form from '../../blocks/Form/Form';
import { TodosContext } from '../../blocks/TodosContext/TodosContext';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const CreateTodos = () => {
	const { addTodo, todos, clearTodos } = useContext(TodosContext);

	const initialValues = {
    title: '',
    description: '',
  }

  const onSubmit = ({ title, description }) => {
    const id = todos.length + 1;

		addTodo({
			id,
			title,
			description,
		});
  }

	return(
		<div>
			<Form initialValues={initialValues} onSubmit={onSubmit}>
				<Input id="title" label="Titre" />
				<Input id="description" label="Description" />
				<button type="submit">Ajouter</button>
			</Form>
			<Button onClick={clearTodos}>Clear</Button>
		</div>
	);
}

export default CreateTodos;