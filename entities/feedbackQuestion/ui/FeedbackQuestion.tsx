import classNames from 'classnames/bind';
import { useRef } from 'react';

import styles from '../model/FeedbackQuestion.module.scss';
import Rating from '@entities/rating/ui/Rating';
import { IFeedbackQuestionProps } from './FeedbackQuestion.props';
import { ArrowRightIcon } from '@shared/ui/icons/ArrowRightIcon';

export const FeedbackQuestion:React.FC<IFeedbackQuestionProps> = ({
	stack,
	question,
	responseLevel,
	answer,
	comment,
}) => {
	const cx = classNames.bind(styles);

	const feedbackRef = useRef<HTMLLIElement>(null);
	const openFeedbackHandler = () => {
		if (feedbackRef.current !== null) {
			feedbackRef.current.classList.toggle(cx('opened'));
		}
	};

	return (
		<li className={cx('feedbackQuestion')} ref={feedbackRef}>
			<div
				className={cx('feedbackQuestion__top')}
				onClick={openFeedbackHandler}
			>
				<span className={cx('feedbackQuestion__top_stack')}>
					{stack}
				</span>
				<span className={cx('feedbackQuestion__top_question')}>
					{question}
				</span>
				<Rating count={responseLevel} readOnly />
				<ArrowRightIcon className={cx('arrow')} />
			</div>
			<div className={cx('feedbackQuestion__body')}>
				<p className={cx('feedbackQuestion__body_answer')}>{answer}</p>
				<p className={cx('feedbackQuestion__body_comment')}>{comment}</p>
			</div>
		</li>
	);
};
