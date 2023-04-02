import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './RatingItem.module.scss';
import { IRatingItemProps } from './RatingItemProps';

export const RatingItem: React.FC<IRatingItemProps> = ({
	id,
	name,
	surName,
	totalQuestionCount,
	totalPoint,
	position,
}) => {
	const cx = classNames.bind(styles);
	const [userId, setUserId] = useState<number>();
	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUserId(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	return (
		<li className={cx('rating-item')}>
			<span className={cx('text')}>{position}</span>
			<span className={cx('text')}>{surName + name}</span>
			<span className={cx('text')}>
				{+(totalPoint / totalQuestionCount).toFixed(1)}
			</span>
			<span className={cx('text')}>{totalPoint}</span>
		</li>
	);
};
