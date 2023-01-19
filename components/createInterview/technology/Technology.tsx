import React from 'react';
import useSWR from 'swr';
import Select from 'react-select';

import { fetcher } from '../../../heplers/api-utils';
import { TTechnology } from './Technology.types';
import styles from './Technology.module.scss';

export const Technology = () => {
	const { data, error } = useSWR(
		'http://51.250.8.47:8080/one-to-one/api/v1/technology',
		fetcher
	);
	if (!data) {
		return <p>Загрузка данных...</p>;
	}
	if (error) {
		return <p>Ошибка загрузки данных!</p>;
	}
	const noOptionsText = 'Технология не найдена!';

	return (
		<Select
			noOptionsMessage={({ inputValue }) =>
				!inputValue ? noOptionsText : 'Технология не найдена!'
			}
			className='react-select'
			classNamePrefix='react-select'
			placeholder='Выбрать'
			options={data.items.map((technology: TTechnology) => {
				return { value: technology.name, label: technology.name };
			})}
		/>
	);
};
