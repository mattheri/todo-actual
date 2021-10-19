import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import LocalStorage from '../../services/LocalStorage';
import './Header.css';

const todo = {
	id: 1,
	title: 'test',
	completed: false
}

const Header = () => {
	const [todos, setTodos] = useState([]);

	const onClick = async () => {
		setTodos(await LocalStorage.addItem('todo', { ...todo, id: todos.length + 1 }));
	}

	useEffect(
		() => {
			(async () => setTodos(await LocalStorage.getItemByKey('todo')))();
		},
		[]
	)

	return (
		<Container fluid>
			<Button onClick={onClick}>Hello</Button>
			{todos.map(todo => (
				<div key={todo.id}>{todo.title}</div>
			))}
		</Container>
	)
}

export default Header;