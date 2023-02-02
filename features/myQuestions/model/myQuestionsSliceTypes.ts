export interface IQuestion {
	id?: number;
	question: string;
	answer: string;
	technology?: {
		id: number | undefined;
		name: string;
	};
	technologyId: number | undefined;
	userId: number | undefined;
}

export interface IGetMyQuestionResponse {
	items: IQuestion[];
	totalItems?: string;
};

export interface ISetQuestions {
	questions: IQuestion[];
}
