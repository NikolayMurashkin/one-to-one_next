import React from 'react';
import useSWR from 'swr';
import Select, { SingleValue } from 'react-select';

import { fetcher } from '../../../heplers/api-utils';
import { TTechnology } from './Technology.types';

type TTechnologyProps = {
	setStack: React.Dispatch<
		React.SetStateAction<SingleValue<{ value: number; label: string }>>
	>;
};

export const Technology: React.FC<TTechnologyProps> = ({ setStack }) => {
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
				return { value: technology.id, label: technology.name };
			})}
			onChange={(
				option: SingleValue<{
					value: number;
					label: string;
				}>
			) => {
				setStack(option);
			}}
		/>
	);
};
