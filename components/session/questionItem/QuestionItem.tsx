import classNames from 'classnames/bind';

import styles from './QuestionItem.module.css';
import { StarIcon } from '../../../public/icons/StarIcon';
import { ArrowRightIcon } from '../../../public/icons/ArrowRightIcon';
import { QuestionItemProps } from './QuestionItem.props';

export const QuestionItem: React.FC<QuestionItemProps> = ({
	stack,
	question,
}) => {
	const cx = classNames.bind(styles);

	return (
		<li className={cx('wrapper')}>
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
