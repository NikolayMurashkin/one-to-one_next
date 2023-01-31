export type QuestionItemProps = {
	question: string;
	answer: string;
	deleteQuestion: (question: string | undefined) => void;
	technologyName: string | undefined;
};
