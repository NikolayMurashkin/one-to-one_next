
import styles from './MyInterview.module.scss';
import { InterviewItem } from '@entities/interviewItem';
import { getDate } from '@shared/api';
import { useGetMyInterviewsQuery } from '@features/myInterviews/api/getMyInterviewsApiSlice';

export const MyInterview = () => {
	const { data: interviews, error } = useGetMyInterviewsQuery();


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
							level={item.level}
							initiatorId={item.initiatorId}
							stack={item.technology.name}
							status={item.status}
							interviewId={item.id}
						/>
					);
				})}
		</ul>
	);
};
