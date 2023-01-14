import HeaderControl from './HeaderControl'
import HeaderOrderFilter from './HeaderOrderFilter'
import HeaderSearch from './HeaderSearch'
import DroppableList from './DroppableList'

import './Header.scss'

import { Link } from 'react-router-dom'

import logoIcon from '../../assets/logo.svg'

const Header = () => {
	return (
		<header className='header'>
			<Link to='/main/pages/1'>
				<img className='header__logo' src={logoIcon} alt='Logo icon' />
			</Link>
			<div className='header__flex-wrapper'>
				<HeaderSearch />
				<DroppableList />
				<HeaderOrderFilter />
			</div>
			<HeaderControl />
		</header>
	)
}

export default Header