export interface IAcceptInterview {
	opponentId: number;
	interviewId: number;
}
export interface IInterview {
	id: number;
	initiatorId: number;
	opponentId: number;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	level: string;
	status: string;
	comment: string;
};

export interface ISearchInterviewItemProps {
	interviewList: IInterview[];
};
