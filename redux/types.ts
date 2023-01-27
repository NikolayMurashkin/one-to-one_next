/* ===========Questions========== */
export interface IQuestion {
	id?: number;
	question: string;
	answer: string;
	technology: {
		id: number | undefined;
		name: string;
	};
	technologyId: number | undefined;
	userId: number | undefined;
}
export type GetAllQuestionResponse = {
	items: IQuestion[];
	totalItems?: string;
};
export type GetQuestionsById = {
	items: IQuestion[];
	totalItems: string;
};

export type QuestionRequest = {
	userid: number;
	id: number | undefined;
};

export type UpdateQuestion = {
	question: string;
	answer: string;
	userId: number | undefined;
	technologyId: number | undefined;
	questionId: number | undefined;
};

export type AddQuestion = {
	userId: number;
	questions: IQuestion[];
};

export type QuestionItemProps = {
	question: string;
	answer: string;
	technology: string | undefined;
};
export type QuestionsProps = {
	openModal: () => void;
	closeModal: () => void;
	modalIsOpen: boolean;
};

/* ===========Questions========== */

/* ===========Tabs========== */
export type Tab = {
	tab: number;
	selectedTab: number;
};
/* ===========Tabs========== */

/* ===========Technology========== */
export interface ITechnology {
	id?: number;
	name: string;
}

export type TechnologyResponse = {
	totalItems: number;
	items: ITechnology[];
};

export type AddTechnology = {
	name: string;
};
/* ===========Technology========== */

/* ===========OneToOne========== */
export interface IOneToOne {
	id: number;
	initiatorId: number;
	opponentId: number | null;
	technology: {
		id: number;
		name: string;
	};
	dateTime: string;
	status: string;
	comment: string;
	level: string;
}

export type OnetoOneResponse = {
	totalItems: number;
	items: IOneToOne[];
};

export type AcceptOneToOne = {
	opponentId: number;
	oneToOneId: number | undefined;
};

export type CloseOneToOne = {
	body: {
		authorId: number;
		opponentId: number;
	};
	oneToOneId: number | undefined;
};
export type CreateOneToOne = {
	initiatorId: number;
	technologyId: number | undefined;
	dateTime: string | undefined;
	comment: string;
	levelId: number | undefined;
};

export type InterviewsModalProps = {
	openModal: () => void;
	modalIsOpen: boolean;
	closeModal: () => void;
};
/* ===========OneToOne========== */

/* ===========Level========== */
export type LevelState = {
	levelsList: { label: string; value: number }[];
	currentLevel: {
		label: string;
		value: number;
	};
};
/* ===========Level========== */

/* ===========User========== */
export interface IUser {
	id: number;
	login: string;
	email: string;
	name: string;
	surName: string;
}

export interface IUserStatisticItem {
	id: number;
	userStatistics: {
		id: number;
		user: IUser;
		totalOneToOneCount: number;
		totalQuestionCount: number;
		totalPoint: number;
	};
	technology: {
		id: number;
		name: string;
	};
	questionCount: number;
	totalPoint: number;
}

export interface IGetFullUserStatistics {
	totalItems: number;
	items: IUserStatisticItem[];
}

/* ===========User========== */
