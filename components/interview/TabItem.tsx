import styles from './TabItem.module.scss';
import Button from './../ui/button/Button';
import { TTabItemProps } from './TabItem.props';

export const TabItem: React.FC<TTabItemProps> = ({ buttonText, color }) => {
	return (
		<section className={styles.tabitem}>
			<span className={styles.text}>11.01.2023 10:00 MSK</span>
			<span className={styles.text}>PascalABC.NET</span>
			<span className={styles.text}>Артем Кашаков</span>
			<span className={styles.text}>Middle</span>
			<Button color={color} text={buttonText} />
		</section>
	);
};
