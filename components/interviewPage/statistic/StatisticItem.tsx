import classNames from 'classnames/bind';

import styles from './StatisticItem.module.scss';
import { TStatisticProps } from './StatisticItem.props';
import Rating from './../../ui/rating/Rating';

export const StatisticItem: React.FC<TStatisticProps> = ({
	count,
	scores,
	questions,
	technology,
}) => {
	const cx = classNames.bind(styles);

	

	return (
		<li className={cx('interviewItem')}>
			<span className={cx('technology')}>{technology}</span>
			<Rating readOnly count={count} />
			<span className={cx('count')}>{scores}</span>
			<span className={cx('count')}>{questions}</span>
		</li>
	);
};
