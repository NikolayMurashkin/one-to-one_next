import styles from '../model/SearchInterview.module.scss';

import { getDate } from '@shared/api/api-utils';
import { useGetAllInterviewsQuery } from '@features/searchInterviews/api/searchInterviewsApiSlice';
import { SearchInterviewItem } from '@entities/searchInterviewItem';

export const SearchInterview = () => {
	const { data: allInterviews, error } = useGetAllInterviewsQuery();

	if (!allInterviews) {
		return <p>Загрузка дааных...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	return (
		<ul className={styles.list}>
			{allInterviews &&
				allInterviews.items.map((item) => {
					return (
						<SearchInterviewItem
							key={item.id}
							buttonText={
								item.status === 'OPEN'
									? 'Откликнуться'
									: 'Заявка отправлена!'
							}
							date={getDate(item, item.dateTime)}
							level={item.level}
							initiatorId={item.initiatorId}
							stack={item.technology.name}
							id={item.id}
						/>
					);
				})}
		</ul>
	);
};
