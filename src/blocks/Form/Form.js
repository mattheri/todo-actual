import { useState } from 'react';
import Input from '../../components/Input/Input';
import FormContextProvider from './FormContext';

const Form = ({ initialValues, onSubmit, children }) => {
	const submitHandler = (event) => {
		event.preventDefault();

		return (values) => {
			onSubmit(values);
		}
	}

	return(
		<FormContextProvider initialValues={initialValues} onSubmit={submitHandler}>
			{children}
		</FormContextProvider>
	);
}

export default Form;