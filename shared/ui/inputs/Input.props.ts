export interface IInputProps {
	type: string;
	placeholder: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
};
