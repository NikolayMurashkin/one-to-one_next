import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './RatingItem.module.scss';
import { IRatingItemProps } from './RatingItemProps';
import MedalOne from '@shared/ui/icons/MedalOne';
import MedalTwo from '@shared/ui/icons/MedalTwo';
import MedalThree from '@shared/ui/icons/MedalThree';

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

	let positionNumber;
	if (position === 1) {
		positionNumber = <MedalOne />;
	} else if (position === 2) {
		positionNumber = <MedalTwo />;
	} else if (position === 3) {
		positionNumber = <MedalThree />;
	}

	return (
		<li className={cx('rating-item')}>
			<span className={cx('text')}>
				{position === 1 || position === 2 || position === 3
					? positionNumber
					: position}
			</span>
			<span className={cx('text')}>{`${surName} ${name}`}</span>
			<span className={cx('text')}>
				{+(totalPoint / totalQuestionCount).toFixed(1)}
			</span>
			<span className={cx('text')}>{totalPoint}</span>
		</li>
	);
};
