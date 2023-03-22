import { IInterviewItem } from '@features/myInterviews/model/interviewItemSliceTypes';

interface Options {
	year: 'numeric';
	month: 'long';
	day: 'numeric';
	hour: '2-digit';
	minute: '2-digit';
	timeZone: string;
}

export const getDate = (data: IInterviewItem, newDate: string): string => {
	if (data) {
		const options: Options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		};
		// const userLocale = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const date = new Date(newDate).toLocaleDateString('ru-RU', options);
		return `${date} MSK`;
	} else {
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
