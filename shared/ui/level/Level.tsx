import React from 'react';
import Select from 'react-select';
import { useAppSelector, useAppDispatch } from '@app/hooks';
import { RootState } from '@app/store';
import { setLevel } from '@shared/ui/level/levelSlice';

export const Level = () => {
	const dispatch = useAppDispatch();

	const levels = useAppSelector((state: RootState) => state.level.levelsList);

	const noOptionsText = 'Уровень не найден!';

	return (
		<Select
			noOptionsMessage={({ inputValue }) =>
				!inputValue ? noOptionsText : 'Уровень не найден!'
			}
			className='react-select'
			classNamePrefix='react-select'
			placeholder='Выбрать'
			options={levels.map((level) => {
				return {
					value: level.value,
					label: level.label.toUpperCase(),
				};
			})}
			onChange={(option) => {
				dispatch(setLevel(option));
			}}
		/>
	);
};
