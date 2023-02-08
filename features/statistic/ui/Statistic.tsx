import { useGetTechnologyStatisticsQuery } from '@shared/api/getTechnologyStatisticApiSlice';

import styles from '../model/Statistic.module.scss';
import { StatisticItem } from '@entities/statisticitem/ui/StatisticItem';

export const Statistic = () => {
	const { data, error, isLoading } = useGetTechnologyStatisticsQuery(2);

	if (isLoading) {
		return <p className={styles.loading}>Загрузка...</p>;
	}
	if (error) {
		return <p className={styles.empty}>Статистика отсуствует</p>;
	}
	if (data) {
		return (
			<ul className={styles.list}>
				{data.items.map((item) => {
					return (
						<StatisticItem
							key={item.id}
							count={item.totalPoint / item.questionCount}
							scores={item.totalPoint}
							technology={item.technology.name}
							questions={item.questionCount}
						/>
					);
				})}
			</ul>
		);
	}
};
