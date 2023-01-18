import useSWR from 'swr';

import styles from './SearchInterview.module.scss';
import { InterviewItem } from './InterviewItem';
import { TOneToOne } from './SearchInterview.props';
import { fetcher, getDate } from '../../../heplers/api-utils';

export const SearchInterview = () => {
	const { data, error } = useSWR(
		'https://158.160.51.32:8080/one-to-one/api/v1/one-to-one?search=status:OPEN',
		fetcher
	);

	if (!data) {
		return <p>Загрузка дааных...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	return (
		<ul className={styles.list}>
			{data &&
				data.items.map((item: TOneToOne) => {
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
							date={getDate(data, item.dateTime)}
							grade={item.level}
							name={item.technology.name}
							stack={item.technology.name}
						/>
					);
				})}
		</ul>
	);
};
