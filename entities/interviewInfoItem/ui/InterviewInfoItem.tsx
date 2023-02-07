import classNames from 'classnames/bind';

import styles from '../model/InterviewInfoItem.module.scss';
import { IInterviewInfoItemProps } from '@entities/interviewInfoItem/model/InterviewInfoItem.props';
import { StarIcon } from '@shared/ui/icons/StarIcon';

export const InterviewInfoItem: React.FC<IInterviewInfoItemProps> = ({
	text,
	count,
}) => {
	const cx = classNames.bind(styles);

	return (
		<div className={cx('item')}>
			<div className={cx('info')}>
				<p className={cx('text')}>{text}</p>
				<p className={cx('count')}>{count}</p>
			</div>
			{text === 'Оценки пользователей' && (
				<StarIcon className={cx('icon')} />
			)}
		</div>
	);
};
