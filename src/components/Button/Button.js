/**
 * Button component
 * @param onClick - function to be called on click
 * @param children - content of the button
 * @param className - additional className
 */
const Button = ({ onClick, type = "button", className, children }) => {
	const clickHandler = (event) => {
		event.preventDefault();
		onClick(event);
	}

	return (
		<button type={type} className={`btn ${className ? className : ''}`} onClick={clickHandler}>
			{children}
		</button>
	);
}

export default Button;