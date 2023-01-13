import { orderFilterType } from './../types/filterTypes';


const biggerToLowerSort = (sortingDataType: 'price' | 'publish-date') => {
	if (sortingDataType === 'price') {
		return (a: any, b: any): number => {
			if (a.price < b.price) return 1;
			return -1;
		}
	} else {
		return (a: any, b: any) => {
			if (new Date(a) < new Date(b)) return 1;
			return -1;
		}
	}
}

const lowerToBiggerSort = (sortingDataType: 'price' | 'publish-date') => {
	if (sortingDataType === 'price') {
		return (a: any, b: any) => {
			if (a.price > b.price) return 1;
			return -1;
		}
	} else {
		return (a: any, b: any) => {
			if (a > b) return 1;
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