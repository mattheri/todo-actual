import Card from '../../components/Card/Card';

const TodosList = ({ todos }) => {
	return(
		<>
			{todos.map(({ id, title, description, completed }) => (
				<Card key={id}
					id={id}
					title={title}
					description={description}
					completed={completed}
				/>
			))}
		</>
	);
}

export default TodosList;