import React from 'react'
import MainItem from './MainItem/MainItem'

import './MainItems.scss'

const MainItems = () => {
	return (
		<section className='main-items'>
			<ul className='main-items__items'>
				<MainItem />
				<MainItem />
				<MainItem />
				<MainItem />
				<MainItem />
			</ul>
		</section>
	)
}

export default MainItems