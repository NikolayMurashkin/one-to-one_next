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
	// timeZone: string;
}

export const getDate = (data: IInterviewItem, newDate: string): string => {
	if (data) {
		const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
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

		const dateTimeOptions: dateTimeOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			// timeZone: 'Pacific/Samoa',
		};
		const localDate = new Date().getTime();
		const recievedDate = new Date(newDate).getTime();
		const anotherDate = () => {
			return localDate > recievedDate
				? localDate - recievedDate
				: recievedDate - localDate;
		};

		const dateWithTz = new Date(
			localDate > recievedDate
				? localDate - anotherDate()
				: recievedDate - anotherDate()
		).toLocaleDateString('ru-RU', dateTimeOptions);
		const date = new Date(newDate).toLocaleDateString(
			'ru-RU',
			dateTimeOptions
		);
		console.log(dateWithTz);
		// console.log(time);
		// console.log(fullDate);
		// const date = new Date(newDate).toLocaleDateString('ru-RU', options);
		// const dateTime = `${day} в ${time}`;
		return `${dateWithTz}`;
	} else {
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
