import React from 'react'

import './MainItem.scss'

import iconUnliked from '../../../assets/icon-unliked.svg'

const MainItem = () => {
	return (
		<li className='main-item'>
			<div className='main-item__picture'>
				<img />
			</div>
			<div className='main-item__info'>
				<p className='main-item__title'>Counter Strike: Global Offensive</p>
				<p className='main-item__date'>date</p>
				<div className='main-item__control'>
					<p className='main-item__price'>price</p>
					<p className='main-item__like'>
						<img src={iconUnliked} alt='Like icon' />
					</p>
				</div>
			</div>
		</li>
	)
}

export default MainItem