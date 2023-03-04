interface IQuestionRequest {
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
	authorId: number | undefined;
	message: string;
	oneToOneId: number;
	questions: IQuestionRequest[];
	recipientId: number | undefined;
}

interface IQuestionRsponse {
	question: string;
	answer: string;
	responseLevel: string;
	comment: string;
}

export interface ISendFeedbackResponse {
	id: number;
	oneToOneId: number;
	authorId: number;
	recipientId: number;
	questions: IQuestionRsponse[];
	message: string;
}
