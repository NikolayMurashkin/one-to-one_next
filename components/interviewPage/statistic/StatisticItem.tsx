import styles from './StatisticItem.module.scss';
import { TStatisticProps } from './StatisticItem.props';
import Rating from './../../ui/rating/Rating';

export const StatisticItem: React.FC<TStatisticProps> = ({count, scores, questions, technology}) => {

	return (
		<li className={styles.interviewItem}>
			<span className={styles.technology}>{technology}</span>
			<Rating readOnly count={count} />
			<span className={styles.count}>{scores}</span>
			<span className={styles.count}>{questions}</span>
		</li>
	);
};
