import { IOneToOne } from '../redux';


type Options = {
	year: 'numeric';
	month: 'long';
	day: 'numeric';
	hour: '2-digit';
	minute: '2-digit';
};

export const getDate = (data: IOneToOne, newDate: string): string => {
	if (data) {
		const options: Options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		};
		const date = new Date(newDate).toLocaleDateString('ru-RU', options);
		return `${date} MSK`;
	} else {
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
