import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ru } from 'date-fns/locale';

import styles from './Datepicker.module.scss';
import { CalendarIcon } from '../../../public/icons/CalendarIcon';

export const Datepicker = ({ setDate }) => {
	const [selected, setSelected] = useState<Date>();
	const [calendarIsOpen, setCalendarIsOpen] = useState<boolean>(false);

	const openCalendarHandler = () => {
		setCalendarIsOpen(true);
	};

	const onSelectHanler = () => {
		setCalendarIsOpen(false);
	};

	const selectedDate = selected?.toLocaleDateString();

	return (
		<>
			<div className={styles.wrapper} onClick={openCalendarHandler}>
				<CalendarIcon />
				<span
					className={`${styles.date} ${
						selectedDate ? styles.selected : styles.placeholder
					}`}
				>
					{selected ? selectedDate : 'дд.мм.гггг'}
				</span>
			</div>
			{calendarIsOpen && (
				<DayPicker
					mode='single'
					selected={selected}
					onSelect={(e) => {
						onSelectHanler();
						setDate(e)
						setSelected(e);
					}}
					className={styles.calendar}
					locale={ru}
				/>
			)}
		</>
	);
};
