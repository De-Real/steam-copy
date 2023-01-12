import React from 'react'
import logoIcon from '../../assets/logo.svg'
import searchIcon from '../../assets/icon-search.svg'
import orderSelectionIcon from '../../assets/order-selection.svg'
import './Header.scss'

const Header = () => {
	return (
		<header className='header'>
			<img className='header__logo' src={logoIcon} alt='Logo icon' />
			<div className='header__search'>
				<input type='text' placeholder='Enter an app name...' id='header-search-input' />
				<label htmlFor='header-search-input'>
					<button><img src={searchIcon} alt='Search icon' /></button>
				</label>
			</div>
			<div className='header__order-selection'>
				{/* droppable list here on click */}
				<img src={orderSelectionIcon} alt='Droppable icon' />
			</div>
			<div className='header__order-filter'>
				<select>
					<option><span>Price</span><span>Img here</span></option>
					<option><span>Publish Date</span><span>Img here</span></option>
				</select>
			</div>
			<div className='header__control'>
				<button>
					Search
				</button>
				<button>
					Like list
				</button>
			</div>
		</header>
	)
}

export default Header