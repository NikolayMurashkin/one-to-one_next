import { IInterviewItem } from '@features/myInterviews/model/interviewItemSliceTypes';

export const getDate = (
	data: IInterviewItem | undefined,
	newDate: string
): string => {
	if (!data || !newDate) {
		return '';
	}

	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const dateTimeOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: userTimeZone,
	};

	try {
		const date = new Date(`${newDate}Z`);
		const dateTime = date.toLocaleString('ru-RU', dateTimeOptions);

		return dateTime;
	} catch (error) {
		console.error(error);
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
