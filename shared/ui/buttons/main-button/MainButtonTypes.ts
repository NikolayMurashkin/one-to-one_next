export interface IMainButton {
	type: 'fill' | 'border';
	color: 'blue' | 'green';
	text: string;
	isDisabled: boolean;
	onClick?: () => void;
}
