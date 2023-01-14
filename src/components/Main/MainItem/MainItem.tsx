import React, { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { likedListActions } from '../../../store/likedListSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHook'

import { FetchingData } from '../../../types/fetchingDataInterface'

import './MainItem.scss'

import iconUnliked from '../../../assets/icon-unliked.svg'
import iconLiked from '../../../assets/icon-liked.svg'
import playButton from '../../../assets/play-button.svg'

const MainItem = ({ product }: { product: FetchingData }) => {

	const [isLiked, setIsLiked] = useState(false);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const { likedList } = useAppSelector(state => state.likedList)

	useEffect(() => {
		if (likedList.includes(product.appId)) {
			setIsLiked(true);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const isLikedChangeHandler = () => {
		setIsLiked((curState) => {
			const changedState = !curState;

			if (changedState) {
				dispatch(likedListActions.addLikedItem(product.appId));
			} else {
				dispatch(likedListActions.removeLikedItem(product.appId));
			}

			return changedState;
		});
	}

	const openDetailed = () => {
		navigate(`/main/detailed/${product.appId}`)
	}

	return (
		<li className='main-item'>
			<div>
				<div className='main-item__picture' onClick={openDetailed}>
					<img src={product.imgUrl} alt='Game' />
				</div>
				<div className='main-item__info'>
					<p className='main-item__title' onClick={openDetailed}>{product.title} </p>
					<p className='main-item__date' onClick={openDetailed} > {product.released}</p>
					<div className='main-item__control'>
						<p className='main-item__price' onClick={openDetailed}>{product.price}</p>
						<p className='main-item__like' onClick={isLikedChangeHandler}>
							<img src={isLiked ? iconLiked : iconUnliked} alt={`${isLiked ? 'Unliked' : 'Unliked'} icon`} />
						</p>
					</div>
				</div>
				{isLiked && <a href={product.url} className='main-item__play'>
					<img src={playButton} alt='Play game icon'></img>
				</a>}
			</div>
		</li >
	)
}

export default MainItem