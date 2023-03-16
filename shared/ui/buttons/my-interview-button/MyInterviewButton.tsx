import classNames from 'classnames/bind';
import { ChatIcon, ClockIcon, CompleteIcon } from './icons';

import styles from './MyInterviewButton.module.scss';
import { IInterviewButton } from './MyInterviewButtonTypes';

export const MyInterviewButton: React.FC<IInterviewButton> = ({ status }) => {
	const cx = classNames.bind(styles);

	return (
		<button
			className={cx('button', {
				blue: status === 'not started',
				'light-blue': status === 'waiting for your review',
				'light-green':
					status === 'waiting for opponent review' ||
					status === 'completed',
			})}
			disabled={
				status === 'completed' ||
				status === 'waiting for opponent review' ||
				status === 'waiting for your review' ||
				status === 'waiting'
			}
		>
			{status === 'not started' ? (
				<>
					<ChatIcon /> Подключиться
				</>
			) : status === 'completed' ? (
				<>
					<CompleteIcon /> Завершено
				</>
			) : status === 'waiting for opponent review' ? (
				<>
					<ClockIcon /> Ожидание отзыва
				</>
			) : status === 'waiting for your review' ? (
				<>
					<ChatIcon /> Оставьте отзыв
				</>
			) : (
				<>
					<ClockIcon /> Ожидание
				</>
			)}
		</button>
	);
};
