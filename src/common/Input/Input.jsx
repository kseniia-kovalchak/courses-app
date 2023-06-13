import './input.css';

const Input = ({
	labelText,
	placeholderText,
	onChange,
	name,
	value,
	type = 'text',
}) => (
	<label className='p-3'>
		{labelText}
		<input
			className='mx-3 border border-warning input'
			type={type}
			placeholder={placeholderText}
			onChange={onChange}
			name={name}
			value={value}
		/>
	</label>
);

export default Input;
