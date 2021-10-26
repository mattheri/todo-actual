import { useContext } from 'react';
import { TodosContext } from '../../blocks/TodosContext/TodosContext';
import TodosList from '../../blocks/TodosList/TodosList';
import Container from '../../components/Container/Container';
import './Header.css';

const Header = () => {
	const { todos } = useContext(TodosContext);

	return (
		<Container fluid>
			<TodosList todos={todos} />
		</Container>
	)
}

export default Header;