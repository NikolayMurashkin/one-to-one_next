import React from 'react';

export interface IQuestionItemProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLLIElement>,
		HTMLLIElement
	> {
	stack: string | undefined;
	question: string;
	onClick?:
		| ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
		| undefined;
}
