export type TOneToOne = {
	id: number;
	initiatorId: number;
	opponentId: number;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	level: string;
	status: string;
	comment: string;
};

export type TSearchInterviewProps = {
	oneToOneList: TOneToOne[];
};
