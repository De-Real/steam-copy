import React, { useState } from 'react'

import './MainItem.scss'

import iconUnliked from '../../../assets/icon-unliked.svg'
import iconLiked from '../../../assets/icon-liked.svg'
import playButton from '../../../assets/play-button.svg'
import { Link } from 'react-router-dom'
import { FetchingData } from '../../../types/fetchingDataInterface'

const MainItem = ({ product }: { product: FetchingData }) => {

	const [isLiked, setIsLiked] = useState(false);

	const isLikedChangeHandler = () => {
		setIsLiked((curState) => !curState);
	}

	return (
		<li className='main-item'>
			<a href={product.url}>
				<div className='main-item__picture'>
					<img src={product.imgUrl} alt='Game picture' />
				</div>
				<div className='main-item__info'>
					<p className='main-item__title'>{product.title}</p>
					<p className='main-item__date'>{product.released}</p>
					<div className='main-item__control'>
						<p className='main-item__price'>{product.price}</p>
						<p className='main-item__like' onClick={isLikedChangeHandler}>
							<img src={isLiked ? iconLiked : iconUnliked} alt={`${isLiked ? 'Unliked' : 'Unliked'} icon`} />
						</p>
					</div>
				</div>
				{isLiked && <div className='main-item__play'>
					<img src={playButton} alt='Play game icon'></img>
				</div>}
			</a>
		</li>
	)
}

export default MainItem