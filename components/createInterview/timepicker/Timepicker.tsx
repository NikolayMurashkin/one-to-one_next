import styles from './Timepicker.module.scss';
import { useState } from 'react';

export const Timepicker = ({ setTime }) => {
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
