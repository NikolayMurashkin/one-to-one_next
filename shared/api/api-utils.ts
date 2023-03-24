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

		const recievedDateOffset = new Date(newDate).getTimezoneOffset();
		const recievedDateTime = Math.abs(new Date(newDate).getTime());
		const dateTime = new Date(
			recievedDateOffset + recievedDateTime
		).toLocaleString('ru-RU', dateTimeOptions);

		// console.log(userTimeZone);

		// const dateOptions: dateOptions = {
		// 	year: 'numeric',
		// 	month: 'long',
		// 	day: 'numeric',
		// 	timeZone: userTimeZone,
		// };
		// const timeOptions: timeOptions = {
		// 	hour: '2-digit',
		// 	minute: '2-digit',
		// 	// timeZone: 'Pacific/Samoa',
		// 	// timeZone: 'Asia/Krasnoyarsk',
		// 	timeZone: userTimeZone,
		// };

		// const localDate = new Date().getTime();
		// const recievedDate = new Date(newDate).getTime();
		// const anotherDate = () => {
		// 	return localDate > recievedDate
		// 		? localDate - recievedDate
		// 		: recievedDate - localDate;
		// };
		// console.log(new Date(anotherDate()));
		// console.log(
		// 	localDate > recievedDate
		// 		? localDate - anotherDate()
		// 		: recievedDate - anotherDate()
		// );
		const utcDate = new Date(newDate);
		// console.log(`utc date: ${utcDate.getTimezoneOffset()}`);

		const dateWithTz = new Date(utcDate).toLocaleString(
			'ru-RU',
			dateTimeOptions
		);
		const date = new Date(newDate).toLocaleDateString(
			'ru-RU',
			dateTimeOptions
		);
		console.log(`date with tz ${dateTime}`);
		// console.log(time);
		// console.log(fullDate);
		// const date = new Date(newDate).toLocaleDateString('ru-RU', options);
		// const dateTime = `${day} в ${time}`;
		return `${dateTime}`;
	} else {
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
