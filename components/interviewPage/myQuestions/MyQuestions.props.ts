export type TQuestionItem = {
	id: number;
	question: string;
	answer: string;
	technology: {
		id: number;
		name: string;
	};
	userId: number;
};

export type TMyQuestionsProps = {
	questionsList: TQuestionItem[];
};
