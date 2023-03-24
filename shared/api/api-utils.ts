import { IInterviewItem } from '@features/myInterviews/model/interviewItemSliceTypes';

interface dateOptions {
	year: 'numeric';
	month: 'long';
	day: 'numeric';
	timeZone: string;
}
interface timeOptions {
	hour: '2-digit';
	minute: '2-digit';
	timeZone: string;
}

interface dateTimeOptions {
	year: 'numeric';
	month: 'long';
	day: 'numeric';
	hour: '2-digit';
	minute: '2-digit';
	timeZone: string;
}

export const getDate = (data: IInterviewItem, newDate: string): string => {
	if (data) {
		const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

		const dateTimeOptions: dateTimeOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: userTimeZone,
		};

		const recievedDateOffset = Math.abs(
			new Date(newDate).getTimezoneOffset() * 60 * 1000
		);
		const recievedDateTime = new Date(newDate).getTime();
		const dateTime = new Date(
			recievedDateOffset + recievedDateTime
		).toLocaleString('ru-RU', dateTimeOptions);

		console.log(new Date(recievedDateOffset + recievedDateTime));

		return `${dateTime}`;
	} else {
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
