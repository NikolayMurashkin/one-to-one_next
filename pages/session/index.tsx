import Head from 'next/head';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { setQuestions } from '@entities/sessionWindowQuestion/api/setQuestionSlice';
import { FilterIcon } from '@shared/ui/icons/FilterIcon';
import { useGetAllQuestionsQuery } from '@shared/api/getAllQuestionsApiSlice';
import { QuestionItem } from '@entities/sessionQuestionItem/ui/QuestionItem';
import { QuestionWindow } from '@features/questionWindow/ui/QuestionWindow';

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
export interface IInterview {
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
export interface IInterviewResponse {
	totalItems: number;
	items: IInterview[];
}

const Session = () => {
	const router = useRouter();

	const cx = classNames.bind(styles);
	const dispatch = useAppDispatch();
	const questions = useAppSelector((state) => state.setQuestion.questions);

	const [userId, setUserId] = useState<number>();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (localStorage && localStorage.getItem('id') === null) {
				router.push('/login');
			}
			const userJson = localStorage.getItem('id');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUserId(user.id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { data, error } = useGetAllQuestionsQuery(userId);

	if (!data) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	const addQuestionHandler = (question: IQuestion) => {
		if (questions.some((oldQuestion) => oldQuestion.id === question.id)) {
			return;
		}
		dispatch(setQuestions(question));
	};

	return (
		<>
			<Head>
				<title>Check-Me</title>
				<meta name='description' content='Interviewing Service' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<section className={cx('wrapper')}>
				<div className={cx('questions')}>
					<div className={cx('searchBar')}>
						<input
							type='search'
							placeholder='Поиск вопроса'
							className={cx('input')}
						/>
						<FilterIcon />
					</div>
					<hr />
					<ul className={cx('questionsList')}>
						{data.items.map((question) => {
							return (
								<QuestionItem
									onClick={() => addQuestionHandler(question)}
									question={question.question}
									key={question.id}
									stack={question.technology?.name}
								/>
							);
						})}
					</ul>
				</div>
				<div className={cx('mainWindow')}>
					<QuestionWindow items={data.items} />
				</div>
			</section>
		</>
	);
};

export default Session;
