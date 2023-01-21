import styles from './Timepicker.module.scss';
import { useState } from 'react';

type TTimepickerProps = {
	setTime: React.Dispatch<React.SetStateAction<string>>;
};

export const Timepicker: React.FC<TTimepickerProps> = ({ setTime }) => {
	return (
		<>
			<input
				type='time'
				name=''
				id=''
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setTime(e.target.value)
				}
			/>
		</>
	);
};
