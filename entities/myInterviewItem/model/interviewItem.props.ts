export interface IInterviewItemProps {
	stack: string;
	initiatorId: number | null;
	date: string;
	level: string;
	status: string;
	interviewId: number;
	opponentId: number | null;
	interviewDate: string;
	initiatorFeedback?: string;
	opponentFeedback?: string;
}
