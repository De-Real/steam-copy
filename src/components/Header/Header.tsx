import React from 'react'
import logoIcon from '../../assets/logo.svg'

import DroppableList from './DroppableList'
import './Header.scss'
import HeaderControl from './HeaderControl'
import HeaderOrderFilter from './HeaderOrderFilter'
import HeaderSearch from './HeaderSearch'

const Header = () => {
	return (
		<header className='header'>
			<img className='header__logo' src={logoIcon} alt='Logo icon' />
			<HeaderSearch />
			<DroppableList />
			<HeaderOrderFilter />
			<HeaderControl />
		</header>
	)
}

export default Header