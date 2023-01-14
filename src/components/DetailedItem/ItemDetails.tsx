import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../../api/steam-search-options';
import { DetailedFetchingData } from '../../types/fetchingDataInterface';

import './ItemDetails.scss'

const ItemDetails = () => {

	const [foundItem, setFoundItem] = useState<DetailedFetchingData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	const { itemId } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true);
			setError('');
			const response = await fetch(`https://steam2.p.rapidapi.com/appDetail/${itemId}`, options);

			if (!response.ok) {
				setIsLoading(false);
				setError(response.statusText)
			}

			const results: DetailedFetchingData = await response.json();

			if (!results) {
				setError('No data fetched!')
			}
			setIsLoading(false);
			setFoundItem(results);
		}

		fetchProduct();

	}, [itemId])

	return (
		<section className='item-details'>
			{error && <p>Error occured, reason: {error}</p>}
			{isLoading && <p>Loading...</p>}
			{!isLoading && error.length === 0 && <div>
				<div className='item-details__header'>
					<div className='item-details__img'>
						<img src={foundItem?.imgUrl} alt='Game'></img>
					</div>
					<div className='item-details__info'>
						<p className='item-details__info-title'>{foundItem?.title}</p>
						<p className='item-details__info-price'>{foundItem?.price}</p>
						<p className='item-details__info-released'>{foundItem?.released}</p>
					</div>
				</div>

				<p className='item-details__description'>
					{foundItem?.description}
				</p>
				<div className='item-details__tags'>
					{foundItem?.tags.map((tag) => {
						return <span key={Math.random()}>
							<h3><a href={tag.url}>{tag.name}</a></h3>
						</span>
					})}
				</div>
			</div>}
		</section >
	)
}

export default ItemDetails