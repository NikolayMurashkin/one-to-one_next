import { useGetTechnologyStatisticsQuery } from '@shared/api/getTechnologyStatisticApiSlice';

import styles from '../model/Statistic.module.scss';
import { StatisticItem } from '@entities/statisticitem/ui/StatisticItem';

export const Statistic = () => {
	const { data, error } = useGetTechnologyStatisticsQuery(2);

	if (!data) {
		return <p>Загрузка...</p>;
	}
	if (error) {
		return <p>Ошибка</p>;
	}
	console.log(data);
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
};
