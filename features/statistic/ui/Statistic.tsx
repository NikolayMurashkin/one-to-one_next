import { useEffect, useState } from 'react';

import { useGetTechnologyStatisticsQuery } from '@shared/api/getTechnologyStatisticApiSlice';
import styles from '../model/Statistic.module.scss';
import { StatisticItem } from '@entities/statisticitem/ui/StatisticItem';

export const Statistic = () => {
	const [user, setUser] = useState<number>();

	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const { data, error, isLoading } = useGetTechnologyStatisticsQuery(
		user ? user : 0
	);

	if (isLoading) {
		return <p className={styles.loading}>Загрузка...</p>;
	} else if (error) {
		return <p className={styles.empty}>Статистика отсуствует</p>;
	} else if (data) {
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
	} else {
		return <p>statistic</p>;
	}
};
