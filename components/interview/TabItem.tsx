import styles from './TabItem.module.scss';
import Button from './../ui/button/Button';
import { TTabItemProps } from './TabItem.props';

export const TabItem: React.FC<TTabItemProps> = ({
	buttonText,
	color,
	stack,
	name,
	date,
	grade,
}) => {
	return (
		<section className={styles.tabItem}>
			<span className={styles.text}>{date}</span>
			<span className={styles.text}>{stack}</span>
			<span className={styles.text}>{name}</span>
			<span className={styles.text}>{grade}</span>
			<Button color={color} text={buttonText} />
		</section>
	);
};
