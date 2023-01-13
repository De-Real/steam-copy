import React from 'react'
import logoIcon from '../../assets/logo.svg'
import { Link } from 'react-router-dom'


import DroppableList from './DroppableList'
import './Header.scss'
import HeaderControl from './HeaderControl'
import HeaderOrderFilter from './HeaderOrderFilter'
import HeaderSearch from './HeaderSearch'

const Header = () => {
	return (
		<header className='header'>

			<Link to='/main/pages/1'>
				<img className='header__logo' src={logoIcon} alt='Logo icon' />
			</Link>
			<HeaderSearch />
			<DroppableList />
			<HeaderOrderFilter />
			<HeaderControl />
		</header>
	)
}

export default Header