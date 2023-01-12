import React, { useState } from 'react'

import './MainItem.scss'

import iconUnliked from '../../../assets/icon-unliked.svg'
import iconLiked from '../../../assets/icon-liked.svg'
import playButton from '../../../assets/play-button.svg'

const MainItem = ({ id, title, price, date }: { id: number, title: string, price: number, date: string }) => {

	const [isLiked, setIsLiked] = useState(false);

	const isLikedChangeHandler = () => {
		setIsLiked((curState) => !curState);
	}

	return (
		<li className='main-item'>
			<div className='main-item__picture'>
				<img />
			</div>
			<div className='main-item__info'>
				<p className='main-item__title'>{title}</p>
				<p className='main-item__date'>{date}</p>
				<div className='main-item__control'>
					<p className='main-item__price'>{price}</p>
					<p className='main-item__like' onClick={isLikedChangeHandler}>
						<img src={isLiked ? iconLiked : iconUnliked} alt={`${isLiked ? 'Unliked' : 'Unliked'} icon`} />
					</p>
				</div>
			</div>
			<div className='main-item__play'>
				<img src={playButton} alt='Play game icon'></img>
			</div>
		</li>
	)
}

export default MainItem