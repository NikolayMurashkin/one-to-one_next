export type QuestionItemProps = {
	stack: string | undefined;
	question: string;
	answer: string;
	id: number | undefined;
	techId: number | undefined;
	setComments: React.Dispatch<React.SetStateAction<string[]>>;
	setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};
