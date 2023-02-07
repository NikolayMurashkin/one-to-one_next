import classNames from 'classnames/bind';

import styles from '../model/StatisticItem.module.scss';
import { IStatisticProps } from '@entities/statisticitem/model/StatisticItem.props';
import Rating from '@entities/rating/ui/Rating';

export const StatisticItem: React.FC<IStatisticProps> = ({
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
