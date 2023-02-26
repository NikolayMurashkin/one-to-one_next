export interface IError {
	data: {
		temistamp: string;
		status: number;
		error: string;
		path: string;
	};
	status: number;
}
