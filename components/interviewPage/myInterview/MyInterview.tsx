
import styles from './MyInterview.module.scss';
import { InterviewItem } from './InterviewItem';
import { getDate } from '../../../heplers/api-utils';
import { useGetMyOneToOneQuery } from '../../../redux';

export const MyInterview = () => {
	const { data: interviews, error } = useGetMyOneToOneQuery();


	if (!interviews) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	return (
		<ul className={styles.list}>
			{interviews.items &&
				interviews.items.filter((item) => item.status !== 'OPEN').map((item) => {
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
