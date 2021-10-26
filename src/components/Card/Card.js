import { useContext } from 'react';
import { TodosContext } from '../../blocks/TodosContext/TodosContext';
import Button from '../Button/Button';
import './Card.css';

const Card = ({ id, title, description = "", completed }) => {
	const { removeTodos } = useContext(TodosContext);

	const removeTodoHandler = () => {
		removeTodos({
			id,
			title,
			description,
			completed
		});
	}

	return(
		<div className="card">
			<div className="card-header">
				<h3>{title}</h3>
			</div>
			<div className="card-body">
				<p>{description}</p>
			</div>
			<div className="card-footer">
				<p>{completed ? 'Completed' : 'Pending'}</p>
				<Button onClick={removeTodoHandler}>Supprimer</Button>
			</div>
		</div>
	);
}

export default Card;