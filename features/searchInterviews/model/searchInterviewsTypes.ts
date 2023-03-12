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

export interface IGetAllInterviewsResponse {
	totalItems: number;
	items: IInterviewItem[];
};
