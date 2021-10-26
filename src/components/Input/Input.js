import { useContext } from 'react';
import { FormContext } from '../../blocks/Form/FormContext';
import useForm from './hook/UseForm';

const Input = ({ id, label }) => {
	const { value, onChange } = useForm(id);

	return(
		<div className='input-group'>
			<label htmlFor={id}>{label}</label>
			<input id={id} onChange={onChange} value={value} />
		</div>
	);
}

export default Input;