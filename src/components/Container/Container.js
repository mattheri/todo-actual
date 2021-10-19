import './Container.css';

const Container = ({ fluid, children }) => {

	return(
		<div className={`container ${fluid ? "fluid" : ""}`}>
			{children}
		</div>
	);
}

export default Container;