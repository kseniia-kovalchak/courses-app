import { useState } from 'react';

import './searchBar.css';

import {
	SEARCH_BAR_BUTTON_TEXT,
	SEARCH_BAR_LABEL_TEXT,
	SEARCH_BAR_PLACEHOLDER_TEXT,
} from './../../../../constants';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

function SearchBar({ onSearch }) {
	const [searchText, setSearchText] = useState('');

	const handleSearchTextChange = (e) => {
		if (e.target.value === '') {
			onSearch('');
		}

		setSearchText(e.target.value);
	};

	return (
		<div className='row'>
			<div className='col'>
				<Input
					labelText={SEARCH_BAR_LABEL_TEXT}
					placeholderText={SEARCH_BAR_PLACEHOLDER_TEXT}
					onChange={handleSearchTextChange}
				/>
			</div>
			<div className='col text-end'>
				<Button
					buttonText={SEARCH_BAR_BUTTON_TEXT}
					onClick={() => {
						onSearch(searchText);
					}}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
