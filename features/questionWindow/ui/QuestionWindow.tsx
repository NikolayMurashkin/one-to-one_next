import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { QuestionItem } from '@entities/sessionWindowQuestion/ui/QuestionItem';
import { useSendFeedbackMutation } from '@shared/api/sendFeedbackApiSlice';
import styles from '../model/QuestionWindow.module.scss';
import { useAppSelector } from '@app/hooks';
import { Technology } from '@entities/technology/ui/Technology';
import { useCloseSessionMutation } from '../api/closeSessionApiSlice';

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

export type GetAllQuestionResponse = {
	items: IQuestion[];
	totalItems?: string;
};

export const QuestionWindow: React.FC<GetAllQuestionResponse> = ({ items }) => {
	const cx = classNames.bind(styles);

	const [comments, setComments] = useState(['']);
	const [message, setMessage] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);
	const [user, setUser] = useState<number>();

	const [closeSession] = useCloseSessionMutation();
	const [sendFeedback] = useSendFeedbackMutation();

	const router = useRouter();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('id');
			const user = userJson !== null ? JSON.parse(userJson) : {};
			setUser(user);
		}
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('id') === null
		) {
			router.push('/login');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const interviewInfo = useAppSelector((state) => state.interviewItem);
	const questions = useAppSelector((state) => state.setQuestion.questions);
	const acceptedQuestions = useAppSelector(
		(state) => state.acceptQuestion.questions
	);

	const sendFeedbackHandler = () => {
		const body = {
			oneToOneId: interviewInfo.interviewId,
			authorId: user,
			recipientId:
				interviewInfo.initiatorId === user
					? interviewInfo.opponentId
					: interviewInfo.initiatorId,
			questions: acceptedQuestions.map((item, i) => {
				return {
					question: {
						id: item.question.id,
						question: item.question.question,
						answer: item.question.answer,
						technologyId: item.question.technologyId,
						userId: item.question.userId,
					},
					responseLevel: item.responseLevel,
					comment: item.comment,
				};
			}),
			message,
		};
		sendFeedback(body);
		if (user === interviewInfo.initiatorId) {
			closeSession({
				interviewId: interviewInfo.interviewId,
				authorId: user,
				opponentId: interviewInfo.opponentId,
			});
		}
		router.push('/');
	};

	return (
		<div className={cx('wrapper')}>
			<div className={cx('top')}>
				<span className={cx('date')}>{interviewInfo.date}</span>
				<span className={cx('name')}>
					{interviewInfo.initiatorName}
				</span>
			</div>
			<hr />
			<ul className={cx('list')}>
				{questions.length <= 0 ? (
					<p>Добавьте вопрос из списка слева</p>
				) : (
					questions.map((question) => {
						return (
							<QuestionItem
								key={question.id}
								techId={question.technology?.id}
								stack={question.technology?.name}
								question={question.question}
								id={question.id}
								answer={question.answer}
								isInterview
								setComments={setComments}
								setIsDisabled={setIsDisabled}
								userId={question.userId}
							/>
						);
					})
				)}
			</ul>
			<div className={cx('bottom')}>
				<input
					onChange={(e) => setMessage(e.target.value)}
					className={cx('text')}
					type='text'
					placeholder='Общий комментарий к собеседованию'
				/>
				<button
					className={cx('button')}
					onClick={sendFeedbackHandler}
					disabled={
						acceptedQuestions.every(
							(question) => question.accepted !== true
						) && acceptedQuestions.length === questions.length
					}
				>
					{acceptedQuestions.length === questions.length &&
						'Сохранить и выйти'}
					{acceptedQuestions.length !== questions.length &&
						'Вам необходимо подтвердить все выбранные вопросы'}
				</button>
			</div>
		</div>
	);
};
