interface IQuestion {
	comment: string;
	question: {
		answer: string;
		id: number;
		question: string;
		technologyId: number;
		userId: number;
	};
	responseLevel: number;
}

export interface ISendFeedbackRequest {
	authorId: number;
	mesage: string;
	oneToOneId: number;
	questions: IQuestion[];
	recipientId: number;
}
