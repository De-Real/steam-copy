import React, { useState } from 'react'

import searchIcon from '../../assets/icon-search.svg'
import { useAppDispatch } from '../../hooks/storeHook';
import { filterParametersActions } from '../../store/filterParametersSlice';


import './HeaderSearch.scss'

const HeaderSearch = () => {

	const [inputValue, setInputValue] = useState('');

	const dispatch = useAppDispatch();

	const changeInputValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
	}

	const searchItemHandler = (event: React.FormEvent<HTMLFormElement>) => {
		dispatch(filterParametersActions.changeSearchingValue(inputValue));
		event.preventDefault();
	}

	return (
		<form className='header__search' onSubmit={searchItemHandler}>
			<input
				type='text'
				placeholder='Enter an app name...'
				id='header-search-input'
				value={inputValue}
				onChange={changeInputValueHandler} />
			<label htmlFor='header-search-input'>
				<button><img src={searchIcon} alt='Search icon' /></button>
			</label>
		</form>
	)
}

export default HeaderSearch