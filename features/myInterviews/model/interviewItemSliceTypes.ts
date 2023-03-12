export interface ISetInterview {
	date: string;
	initiatorName: string;
	interviewId: number;
	initiatorId: number | null;
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
	initiatorFeedback: string;
	opponentFeedback: string;
}

export interface IGetMyInterviewsResponse {
	totalItems: number;
	items: IInterviewItem[];
}

export interface IGetMyInterviewsProps extends IGetMyInterviewsResponse {
	opponent?: boolean;
	initiator?: boolean;
}
