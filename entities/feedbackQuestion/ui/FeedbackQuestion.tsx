import classNames from 'classnames/bind';

import styles from '../model/FeedbackQuestion.module.scss';
import Rating from '@entities/rating/ui/Rating';
import { IFeedbackQuestionProps } from './FeedbackQuestion.props';

export const FeedbackQuestion:React.FC<IFeedbackQuestionProps> = ({
	stack,
	question,
	responseLevel,
	answer,
	comment,
}) => {
	const cx = classNames.bind(styles);
	return (
		<li className={cx('feedbackQuestion')}>
			<div className={cx('feedbackQuestion__top')}>
				<span className={cx('feedbackQuestion__top_stack')}>
					{stack}
				</span>
				<span className={cx('feedbackQuestion__top_question')}>
					{question}
				</span>
				<Rating count={responseLevel} readOnly />
			</div>
			<div className={cx('feedbackQuestion__body')}>
				<p className={cx('feedbackQuestion__answer')}>{answer}</p>
				<p className={cx('feedbackQuestion__comment')}>{comment}</p>
			</div>
		</li>
	);
};
