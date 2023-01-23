import useSWR from 'swr';

import styles from './SearchInterview.module.scss';
import { InterviewItem } from './InterviewItem';
import { TOneToOne } from './SearchInterview.props';
import { fetcher, getDate } from '../../../heplers/api-utils';
import { useGetAllOneToOneQuery } from '../../../redux';

export const SearchInterview = () => {
	const { data: allInterviews, error } = useGetAllOneToOneQuery();

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
						<InterviewItem
							key={item.id}
							buttonText={
								item.status === 'OPEN'
									? 'Откликнуться'
									: 'Заявка отправлена!'
							}
							color={
								item.status === 'OPEN' ? 'ghost' : 'secondary'
							}
							date={getDate(item, item.dateTime)}
							grade={item.level}
							name={item.technology.name}
							stack={item.technology.name}
							id={item.id}
						/>
					);
				})}
		</ul>
	);
};
