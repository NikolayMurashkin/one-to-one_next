import classNames from 'classnames/bind';
import { ChatIcon, ClockIcon, CompleteIcon } from './icons';

import styles from './MyInterviewButton.module.scss';
import { IInterviewButton } from './MyInterviewButtonTypes';

export const MyInterviewButton: React.FC<IInterviewButton> = ({ status }) => {
	const cx = classNames.bind(styles);

	return (
		<button
			className={cx('button', {
				blue: status === 'active',
				'light-blue': status === 'waiting',
				'light-green': status === 'completed',
			})}
			disabled={status === 'completed' || status === 'waiting'}
		>
			{status === 'active' ? (
				<>
					<ChatIcon /> Подключиться
				</>
			) : status === 'completed' ? (
				<>
					<CompleteIcon /> Завершено
				</>
			) : (
				<>
					<ClockIcon /> Ожидание
				</>
			)}
		</button>
	);
};
