import React from 'react';
import Select, { SingleValue } from 'react-select';


type TLevelProps = {
	setLevel: React.Dispatch<
		React.SetStateAction<SingleValue<{ value: number; label: string }>>
	>;
};


export const Level: React.FC<TLevelProps> = ({ setLevel }) => {
	const levels = [
		{
			name: 'Junior',
			value: 1,
		},
		{
			name: 'Middle',
			value: 2,
		},
		{
			name: 'Senior',
			value: 3,
		},
	];
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
					label: level.name.toUpperCase(),
				};
			})}
			onChange={(option) => {
				setLevel(option);
			}}
		/>
	);
};
