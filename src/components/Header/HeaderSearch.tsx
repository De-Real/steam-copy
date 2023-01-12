import React, { useState } from 'react'

import searchIcon from '../../assets/icon-search.svg'

import './HeaderSearch.scss'

const HeaderSearch = () => {

	const [inputValue, setInputValue] = useState('');

	const changeInputValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setInputValue(event.currentTarget.value);
	}

	const searchItemHandler = () => {
		console.log(inputValue);
	}

	return (
		<div className='header__search'>
			<input
				type='text'
				placeholder='Enter an app name...'
				id='header-search-input'
				value={inputValue}
				onChange={changeInputValueHandler} />
			<label htmlFor='header-search-input'>
				<button onClick={searchItemHandler}><img src={searchIcon} alt='Search icon' /></button>
			</label>
		</div>
	)
}

export default HeaderSearch