import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ru } from 'date-fns/locale';

import styles from './Datepicker.module.scss';
import { CalendarIcon } from '../../../public/icons/CalendarIcon';

type TDatepickerProps = {
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export const Datepicker: React.FC<TDatepickerProps> = ({ setDate }) => {
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
					onSelect={(day) => {
						onSelectHanler();
						setDate(day);
						setSelected(day);
					}}
					className={styles.calendar}
					locale={ru}
				/>
			)}
		</>
	);
};
