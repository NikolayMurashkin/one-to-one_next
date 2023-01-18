import { useState } from 'react';

export const Datepicker = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<p>Datepicker</p>
	);
};
