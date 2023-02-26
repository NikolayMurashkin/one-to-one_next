import classNames from 'classnames/bind';

import styles from '../model/QuestionItem.module.scss';
import { IQuestionItemProps } from '../model/QuestionItem.props';
import { StarIcon } from '@shared/ui/icons/StarIcon';
import { ArrowRightIcon } from '@shared/ui/icons/ArrowRightIcon';

export const QuestionItem: React.FC<IQuestionItemProps> = ({
	stack,
	question,
	onClick
}) => {
	const cx = classNames.bind(styles);

	return (
		<li className={cx('wrapper')} onClick={onClick}>
			<div className={cx('content')}>
				<span className={cx('stack')}>
					<StarIcon /> {stack}
				</span>
				<p className={cx('question')}>{question}</p>
			</div>
			<ArrowRightIcon />
		</li>
	);
};
