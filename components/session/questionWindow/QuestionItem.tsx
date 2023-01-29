import classNames from 'classnames/bind';

import styles from './QuestionItem.module.css';
import { ArrowRightIcon } from '../../../public/icons/ArrowRightIcon';
import { QuestionItemProps } from './QuestionItem.props';
import Rating from './../../ui/rating/Rating';
import { CloseIcon } from './../../../public/icons/CloseIcon';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { removeQuestion } from '../../../slices/questionsSlice';
import { acceptQuestion } from '../../../slices/acceptedQuestionsSlice';

export const QuestionItem: React.FC<QuestionItemProps> = ({
	stack,
	question,
	answer,
	id,
	techId,
	setComments,
	setIsDisabled,
}) => {
	const cx = classNames.bind(styles);
	const [comment, setComment] = useState('');
	const commentRef = useRef<HTMLLIElement>(null);

	const dispatch = useAppDispatch();
	const acceptedQuestions = useAppSelector(
		(state) => state.acceptedQuestions.questions
	);
	const rating = useAppSelector((state) => state.rating.value);

	const removeQuestionHandler = (id: number | undefined) => {
		dispatch(removeQuestion(id));
	};

	const openCommentHandler = () => {
		commentRef.current?.classList.toggle(cx('opened'));
	};

	const acceptQuestionHanlder = () => {
		// console.log(
		// 	acceptedQuestions.every((question) => question.accepted === true)
		// );
		// if (acceptedQuestions.some((item) => item.question.id === id)) {
		// 	return;
		// }
		dispatch(
			acceptQuestion({
				question: {
					id,
					question,
					answer,
					technologyId: techId,
					userId: 1,
				},
				responseLevel: rating,
				comment,
				accepted: true,
			})
		);
		setIsDisabled(
			acceptedQuestions.every((question) => question.accepted === true)
		);
	};

	return (
		<li className={cx('wrapper')} ref={commentRef}>
			<div className={cx('content')} onClick={openCommentHandler}>
				<CloseIcon onClick={() => removeQuestionHandler(id)} />
				<span className={cx('stack')}>{stack}</span>
				<span className={cx('question')}>{question}</span>
				<Rating readOnly={false} />
				<ArrowRightIcon className={cx('arrow')} />
			</div>
			<div className={cx('commentWrapper')}>
				<p className={cx('answer')}>{answer}</p>
				<div className={cx('comment')}>
					<textarea
						onChange={(e) => setComment(e.target.value)}
						cols={60}
						rows={5}
						placeholder='Введите комментарий к ответу'
						className={cx('text')}
					/>
					<button
						className={cx('button')}
						onClick={acceptQuestionHanlder}
					>
						Подтвердить
					</button>
				</div>
			</div>
		</li>
	);
};
