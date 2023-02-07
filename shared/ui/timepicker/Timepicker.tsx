interface ITimepickerProps {
	setTime: React.Dispatch<React.SetStateAction<string>>;
};

export const Timepicker: React.FC<ITimepickerProps> = ({ setTime }) => {
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
