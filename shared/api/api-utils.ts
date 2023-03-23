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

export const getDate = (data: IInterviewItem, newDate: string): string => {
	if (data) {
		const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		// console.log(userTimeZone);

		const dateOptions: dateOptions = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: userTimeZone,
		};
		const timeOptions: timeOptions = {
			hour: '2-digit',
			minute: '2-digit',
			// timeZone: 'Pacific/Samoa',
			// timeZone: 'Asia/Krasnoyarsk',
			timeZone: userTimeZone,
		};
		// const day = new Date(newDate).toLocaleDateString('ru-RU', dateOptions);
		// const time = new Date(newDate).toLocaleTimeString('ru-RU', timeOptions);
		const day = new Date(newDate).toLocaleDateString('ru-RU', dateOptions);
		const time = new Date(newDate).toLocaleTimeString('ru-RU', timeOptions);
		const fullDate = new Date(`${day} ${time}`).toLocaleDateString(
			'ru-RU',
			{ timeZone: 'Asia/Krasnoyarsk' }
		);
		console.log(day);
		console.log(time);
		console.log(fullDate);
		// const date = new Date(newDate).toLocaleDateString('ru-RU', options);
		const dateTime = `${day} в ${time}`;
		return `${fullDate}`;
	} else {
		return '';
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
