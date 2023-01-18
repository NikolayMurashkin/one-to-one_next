import { TSearchInterviewProps } from '../components/interviewPage/searchInterview/SearchInterview.props';

type TGetDateProps = {
	data: TSearchInterviewProps;
	newDate: string;
};

type TOptions = {
	year: 'numeric';
	month: 'long';
	day: 'numeric';
	hour: '2-digit';
	minute: '2-digit';
};

export const getDate = (
	data: TGetDateProps,
	newDate: string
): string | undefined => {
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
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
