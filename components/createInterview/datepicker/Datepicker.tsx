import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export const Datepicker = () => {
	const [startDate, setStartDate] = useState(new Date());
	return <DayPicker />;
};
