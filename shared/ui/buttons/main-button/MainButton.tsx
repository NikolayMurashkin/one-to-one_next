import classNames from 'classnames/bind';

import styles from './MainButton.module.scss';
import { IMainButton } from './MainButtonTypes';

export const MainButton: React.FC<IMainButton> = ({
	type,
	color,
	text,
	isDisabled,
	onClick,
}) => {
	const cx = classNames.bind(styles);
	if (text === 'Подробнее') {
		return (
			<button
				onClick={onClick}
				className={cx('button', {
					'border-blue': color === 'blue' && type === 'border',
					'border-green': color === 'green' && type === 'border',
					'fill-blue': color === 'blue' && type === 'fill',
					'fill-green': color === 'green' && type === 'fill',
				})}
				disabled={isDisabled}
			>
				{text}
			</button>
		);
	}
	if (text === 'Выйти') {
		return (
			<button
				onClick={onClick}
				className={cx('button', {
					'border-blue': color === 'blue' && type === 'border',
					'border-green': color === 'green' && type === 'border',
					'fill-blue': color === 'blue' && type === 'fill',
					'fill-green': color === 'green' && type === 'fill',
				})}
				disabled={isDisabled}
			>
				{text}
			</button>
		);
	}

	return (
		<button
			className={cx('button', {
				'border-blue': color === 'blue' && type === 'border',
				'border-green': color === 'green' && type === 'border',
				'fill-blue': color === 'blue' && type === 'fill',
				'fill-green': color === 'green' && type === 'fill',
			})}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
};
