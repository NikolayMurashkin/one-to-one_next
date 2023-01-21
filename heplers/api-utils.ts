import { TOneToOne } from '../components/interviewPage/searchInterview/SearchInterview.props';


type TOptions = {
	year: 'numeric';
	month: 'long';
	day: 'numeric';
	hour: '2-digit';
	minute: '2-digit';
};

export const getDate = (data: TOneToOne, newDate: string): string => {
	if (data) {
		const options: TOptions = {
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
