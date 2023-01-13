import React, { useEffect } from 'react'
import MainItems from '../components/Main/MainItems'
import { useAppDispatch } from '../hooks/storeHook';
import { loadProducts } from '../store/productFetching';

const Main = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadProducts());
	})

	return (
		<article>
			<MainItems />
		</article >
	)
}

export default Main