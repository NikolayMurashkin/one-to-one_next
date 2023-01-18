import styles from './Statistic.module.scss';
import { StatisticItem } from './StatisticItem';

export const Statistic = () => {
	return (
		<ul className={styles.list}>
			<StatisticItem
				count={1}
				scores={4}
				questions={108}
				technology='TypeScript'
			/>
			<StatisticItem
				count={2}
				scores={8}
				questions={108}
				technology='TypeScript'
			/>
			<StatisticItem
				count={3}
				scores={15}
				questions={108}
				technology='TypeScript'
			/>
			<StatisticItem
				count={4}
				scores={16}
				questions={108}
				technology='TypeScript'
			/>
			<StatisticItem
				count={5}
				scores={23}
				questions={108}
				technology='TypeScript'
			/>
			<StatisticItem
				count={1}
				scores={42}
				questions={108}
				technology='TypeScript'
			/>
		</ul>
	);
};
