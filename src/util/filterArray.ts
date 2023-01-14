import { orderFilterType } from './../types/filterTypes';


const biggerToLowerSort = (sortingDataType: 'price' | 'publish-date') => {
	if (sortingDataType === 'price') {
		return (a: any, b: any): number => {
			const priceA = parseFloat(a.price);
			const priceB = parseFloat(b.price);

			if (isNaN(priceA)) {
				return 1
			} else if (isNaN(priceB)) {
				return -1;
			} else if (priceA < priceB) {
				return 1;
			} else return -1;
		}
	}

	else {
		return (a: any, b: any) => {
			const dateA = Date.parse(a.released);
			const dateB = Date.parse(b.released);

			if (isNaN(dateA)) return 1;
			if (isNaN(dateB)) return -1;

			if (dateA < dateB) return 1;
			return -1;
		}
	}
}


const lowerToBiggerSort = (sortingDataType: 'price' | 'publish-date') => {
	if (sortingDataType === 'price') {
		return (a: any, b: any) => {
			const priceA = parseFloat(a.price);
			const priceB = parseFloat(b.price);

			if (isNaN(priceA)) {
				return -1;
			} else if (isNaN(priceB)) {
				return 1;
			} else if (priceA < priceB) {
				return -1;
			} else return 1;
		}
	} else {
		return (a: any, b: any) => {
			console.log('CALLED!!!');
			if (Date.parse(a.released) > Date.parse(b.released)) return 1;
			return -1;
		}
	}
}

export const filterArray = <T>(arr: T[], orderFilter: string, droppableFilter: orderFilterType): T[] => {
	if ((orderFilter !== 'price' && orderFilter !== 'publish-date')) return [...arr];

	let arrCopy = [...arr];

	if (droppableFilter === 'biggerToLower' || droppableFilter === 'none') {
		return arrCopy.sort(biggerToLowerSort(orderFilter));
	} else {
		return arrCopy.sort(lowerToBiggerSort(orderFilter));
	}
}