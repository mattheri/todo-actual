import { createContext, useState } from 'react';

export const FormContext = createContext({
	getInputValue:(id) => "",
	setInputValue:(id, value) => {},
});

const FormContextProvider = ({ initialValues, onSubmit, children }) => {
	const [values, setValues] = useState(initialValues);

	const getInputValue = (id) => values[id];
	const setInputValue = (id, value) => {
		setValues({ ...values, [id]: value });
	}
	const handleSubmit = (e) => {
		const submitWithValues = onSubmit(e);

		submitWithValues(values);
	}

	return (
		<FormContext.Provider value={{ getInputValue, setInputValue }}>
			<form onSubmit={handleSubmit}>
				{children}
			</form>
		</FormContext.Provider>
	)
}

export default FormContextProvider;