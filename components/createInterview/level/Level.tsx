import React from 'react';
import useSWR from 'swr';
import Select from 'react-select';

import { fetcher } from '../../../heplers/api-utils';
import styles from './Technology.module.scss';

export const Level = () => {
	const levels = [
		{
			name: 'Junior',
			value: 'Junior',
		},
		{
			name: 'Middle',
			value: 'Middle',
		},
		{
			name: 'Senior',
			value: 'Senior',
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
					value: level.value.toUpperCase(),
					label: level.name.toUpperCase(),
				};
			})}
		/>
	);
};
