import useSWR from 'swr';

import styles from './MyInterview.module.scss';
import { InterviewItem } from './InterviewItem';
import { fetcher, getDate } from '../../../heplers/api-utils';
import { TOneToOne } from '../searchInterview/SearchInterview.props';

export const MyInterview = () => {

	const { data, error } = useSWR(
		'http://51.250.8.47:8080/one-to-one/api/v1/one-to-one',
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
			{data.items &&
				data.items.filter((item: TOneToOne) => item.status !== 'OPEN').map((item: TOneToOne) => {
					return (
						<InterviewItem
							key={item.id}
							date={getDate(item, item.dateTime)}
							grade={item.level}
							name={item.technology.name}
							stack={item.technology.name}
							status={item.status}
						/>
					);
				})}
		</ul>
	);
};
