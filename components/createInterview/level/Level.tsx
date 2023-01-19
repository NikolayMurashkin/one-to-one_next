import React from 'react';
import useSWR from 'swr';
import Select from 'react-select';

import { fetcher } from '../../../heplers/api-utils';
import styles from './Technology.module.scss';

export const Level = ({ setLevel }) => {
	const levels = [
		{
			name: 'Junior',
			value: '1',
		},
		{
			name: 'Middle',
			value: '2',
		},
		{
			name: 'Senior',
			value: '3',
		},
	];
	const noOptionsText = 'Уровень не найден!';

	return (
		<Select
			noOptionsMessage={({ inputValue }) =>
				!inputValue ? noOptionsText : 'Технология не найден!'
			}
			className='react-select'
			classNamePrefix='react-select'
			placeholder='Выбрать'
			options={levels.map((level) => {
				return {
					value: level.value,
					label: level.name.toUpperCase(),
				};
			})}
			onChange={setLevel}
		/>
	);
};
