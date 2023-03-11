export interface ISetInterview {
	date: string;
	initiatorName: string;
	interviewId: number;
	initiatorId: number;
	level: string;
	status: string;
	stack: string;
	opponentId: number | null;
}

export interface IInterviewItem {
	id: number;
	initiatorId: number;
	opponentId: number | null;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	status: string;
	comment: string;
	level: string;
}

export interface IGetMyInterviewsResponse {
	totalItems: number;
	items: IInterviewItem[];
}

export interface IGetMyInterviewsProps extends IGetMyInterviewsResponse {
	opponent?: boolean;
	initiator?: boolean;
}
