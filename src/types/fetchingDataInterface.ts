export interface FetchingData {
	appId: string;
	imgUrl: string;
	price: string;
	released: string;
	reviewSummary: string;
	title: string;
	url: string;
	liked?: boolean;
}

export interface DetailedFetchingData {
	imgUrl: string;
	title: string;
	developer: {
		link: string;
		name: string;
	}
	publisher: {
		link: string;
		name: string;
	}
	released: string;
	description: string;
	tags: [
		{
			url: string;
			name: string
		}
	]
	summary: string;
	price: string;
}