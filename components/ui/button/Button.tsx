import classNames from 'classnames';

import styles from './Button.module.scss';
import { TButtonProps } from './Button.props';

const Button: React.FC<TButtonProps> = ({ text, color }) => {
	return (
		<button
			className={classNames(styles.button, {
				[styles.primary]: color === 'primary',
				[styles.secondary]: color === 'secondary',
				[styles.ghost]: color === 'ghost',
				[styles.ghostRed]: color === 'ghost-red',
			})}
		>
			{text}
		</button>
	);
};

export default Button;
