import './button.css';

const Button = ({ buttonText, onClick, className }) => (
	<button
		onClick={onClick}
		className={'m-3 btn btn-outline-primary ' + className}
	>
		{buttonText}
	</button>
);

export default Button;
