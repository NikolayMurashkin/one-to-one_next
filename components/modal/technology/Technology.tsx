import React from 'react';
import Select from 'react-select';

import {  useGetTechnologiesQuery } from '../../../redux';
import { useAppDispatch } from './../../../hooks/redux';
import { setTechnology } from '../../../slices/technologySlice';

export const Technology = () => {
	const dispatch = useAppDispatch();

	const { data, error } = useGetTechnologiesQuery();

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
			options={data.items.map((technology) => {
				return { value: technology.id, label: technology.name };
			})}
			onChange={(option) => {
				dispatch(
					setTechnology({
						id: option?.value,
						name: option?.label,
					})
				);
			}}
		/>
	);
};
