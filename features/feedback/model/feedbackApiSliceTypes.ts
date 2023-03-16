export interface IGetFeedbackResponse {
	id: number;
	oneToOneId: number;
	authorId: number;
	recipientId: number;
	questions: [
		{
			question: string;
			answer: string;
			responseLevel: string;
			comment: string;
			technology: string;
		}
	];
	message: string;
}

export interface IGetFeedbackRequestBody {
	userId: number | null | undefined;
	interviewId: number;
}
