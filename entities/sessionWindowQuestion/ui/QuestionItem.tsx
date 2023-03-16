import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import styles from '../model/QuestionItem.module.scss';
import { ArrowRightIcon } from '@shared/ui/icons/ArrowRightIcon';
import { QuestionItemProps } from '../model/QuestionItem.props';
import Rating from '@entities/rating/ui/Rating';
import { CloseIcon } from '@shared/ui/icons/CloseIcon';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { removeQuestion } from '@entities/sessionWindowQuestion/api/setQuestionSlice';
import {
	acceptQuestion,
	removeAcceptedQuestion,
} from '@entities/sessionWindowQuestion/api/acceptQuestionSlice';

export const QuestionItem: React.FC<QuestionItemProps> = ({
	stack,
	question,
	answer,
	id,
	techId,
	userId,
	isInterview,
	setComments,
	setIsDisabled,
}) => {
	const cx = classNames.bind(styles);
	const [comment, setComment] = useState('');
	const commentRef = useRef<HTMLLIElement>(null);

	const dispatch = useAppDispatch();
	const acceptedQuestions = useAppSelector(
		(state) => state.acceptQuestion.questions
	);
	const rating = useAppSelector((state) => state.rating.value);

	const removeQuestionHandler = (id: number | undefined) => {
		dispatch(removeQuestion(id));
		dispatch(removeAcceptedQuestion({ id }));
	};

	const openCommentHandler = () => {
		commentRef.current?.classList.toggle(cx('opened'));
	};

	const acceptQuestionHanlder = () => {
		dispatch(
			acceptQuestion({
				question: {
					id,
					question,
					answer,
					technologyId: techId,
					userId: userId,
				},
				responseLevel: rating,
				comment,
				accepted: true,
			})
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
					{isInterview && (
						<textarea
							onChange={(e) => setComment(e.target.value)}
							cols={50}
							rows={5}
							placeholder='Введите комментарий к ответу'
							className={cx('text')}
						/>
					)}
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
