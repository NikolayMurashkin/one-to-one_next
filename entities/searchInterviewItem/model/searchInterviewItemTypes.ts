export interface IAcceptInterview {
	opponentId: number | undefined;
	oneToOneId: number | undefined;
}
export interface IInterviewItem {
	id: number;
	initiatorId: number;
	opponentId: number | undefined;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	level: string;
	status: string;
	comment: string;
}

export interface ISearchInterviewItemProps {
	interviewList: IInterviewItem[];
}
