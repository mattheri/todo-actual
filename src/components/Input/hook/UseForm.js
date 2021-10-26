import { useContext } from "react";
import { FormContext } from '../../../blocks/Form/FormContext';

const useForm = (id) => {
	const { getInputValue, setInputValue } = useContext(FormContext);

	const value = getInputValue(id);
	const onChange = (e) => setInputValue(id, e.target.value);

	return {
		value,
		onChange
	}
}

export default useForm;