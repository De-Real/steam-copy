import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks/storeHook';
import { filterParametersActions } from '../../store/filterParametersSlice';

import './HeaderOrderFilter.scss';

const HeaderOrderFilter = () => {

	const [value, setValue] = useState<string>('price');

	const dispatch = useAppDispatch();
	
	const valueChange = (event: React.FormEvent<HTMLSelectElement>) => {
		setValue(event.currentTarget.value);
		dispatch(filterParametersActions.changeOrderFilterValue(event.currentTarget.value))
	}

	return (
		<div className='header__order-filter'>
			<select className='header__order-select' onChange={valueChange} value={value}>
				<option value='price'>Price</option>
				<option value='publish-date'>Publish date</option>
			</select>
		</div>
	)
}

export default HeaderOrderFilter