export type TInterviewItemProps = {
	stack: string;
	name: string;
	date: string | undefined;
	grade: string;
	status: 'pending' | 'ready' | 'complete';
};
