import React, { useEffect, useState } from 'react'

import orderSelectionIcon from '../../assets/order-selection.svg'
import { useAppDispatch } from '../../hooks/storeHook';
import { filterParametersActions } from '../../store/filterParametersSlice';

import './DroppableList.scss'

const DroppableList = () => {

	const [isOpen, setIsOpen] = useState(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const changeStatus = () => {
			if (isOpen) {
				setIsOpen(false);
			}
		}

		window.addEventListener('click', changeStatus);

		return () => {
			window.removeEventListener('click', changeStatus);
		}
	}, [isOpen])

	const manageOpening = (event: React.FormEvent<HTMLParagraphElement>) => {
		setIsOpen((curState) => !curState);

		//To give possibility to user open droppable list
		//because eventListener above will close it immediately 
		event.nativeEvent.stopImmediatePropagation();
	}



	const setFilterParameter = (parameter: 'lowerToBigger' | 'biggerToLower') => {
		dispatch(filterParametersActions.changeDroppableFilterValue(parameter));
	}

	const classes = `header__order-selection ${isOpen ? 'open' : ''}`

	return (

		<div className={classes} onClick={manageOpening}>
			{/* droppable list here on click */}
			<img src={orderSelectionIcon} alt='Droppable icon' />
			{isOpen ? <div className='header__droppable'>
				<p onClick={setFilterParameter.bind(null, 'lowerToBigger')}> Lower to bigger </p>
				<p onClick={setFilterParameter.bind(null, 'biggerToLower')}> Bigger to lower </p>
			</div> : ''}
		</div>

	)
}

export default DroppableList