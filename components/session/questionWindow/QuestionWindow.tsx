import classNames from 'classnames/bind';
import {
	GetAllQuestionResponse,
	useSendFeedbackMutation,
} from '../../../redux';
import { QuestionItem } from './QuestionItem';

import styles from './QuestionWindow.module.css';
import { useAppSelector } from '../../../hooks/redux';
import { useState } from 'react';
import { Technology } from './../../modal/technology/Technology';

export const QuestionWindow: React.FC<GetAllQuestionResponse> = ({ items }) => {
	const cx = classNames.bind(styles);
	const [comments, setComments] = useState(['']);
	const [message, setMessage] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	const [sendFeedback] = useSendFeedbackMutation();

	const interviewInfo = useAppSelector((state) => state.interview);
	const questions = useAppSelector((state) => state.questions.questions);

	const acceptedQuestions = useAppSelector(
		(state) => state.acceptedQuestions.questions
	);

	const sendFeedbackHandler = () => {
		const body = {
			oneToOneId: interviewInfo.interviewId,
			authorId: interviewInfo.initiatorId,
			recipientId: 2,
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
		sendFeedback({ body: JSON.stringify(body) });
		
		fetch(`http://51.250.8.47:8080/one-to-one/api/v1/one-to-one/${interviewInfo.interviewId}/close`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				authorId: interviewInfo.initiatorId,
				opponentId: 2,
			}),
		});

		console.log(body);
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
					disabled={acceptedQuestions.every(
						(question) => question.accepted !== true
					)}
				>
					Сохранить и выйти
				</button>
			</div>
		</div>
	);
};
