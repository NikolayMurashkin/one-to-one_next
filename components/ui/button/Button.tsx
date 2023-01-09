import styles from './Button.module.scss';
import { TButtonProps } from './Button.props';

const Button: React.FC<TButtonProps> = ({ text, color }) => {
	if (color === 'primary') {
		return (
			<button className={`${styles.button} ${styles.primary}`}>
				{text}
			</button>
		);
	} else {
		return (
			<button className={`${styles.button} ${styles.secondary}`}>
				{text}
			</button>
		);
	}
};

export default Button;
