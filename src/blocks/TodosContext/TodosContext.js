import { createContext, useEffect, useState } from 'react';
import LocalStorage from '../../services/LocalStorage';

export const TodosContext = createContext({
	todos: [],
	addTodo: (todo) => {},
	removeTodo: (todo) => {},
	clearTodos: () => {},
});

const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	const addTodo = async (todo) => {
		const newTodos = await LocalStorage.addItem("todos", todo);
		setTodos(newTodos);
	}

	const removeTodos = async (todo) => {
		const newTodos = await LocalStorage.removeItem("todos", todo);
		setTodos(newTodos);
	}

	const clearTodos = async () => {
		await LocalStorage.removeItems("todos");
		setTodos([]);
	}

	const getInitialTodos = async () => {
		const todos = await LocalStorage.getItemByKey("todos");
		setTodos(todos);
	}

	useEffect(
		() => {
			getInitialTodos();
		},
		[]
	)

	return(
		<TodosContext.Provider value={{ todos, addTodo, removeTodos, clearTodos }}>
			{children}
		</TodosContext.Provider>
	);
} 

export default TodosContextProvider;

